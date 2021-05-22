import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  id: number = 0;
  user: User = new User();
  message="";
  isValidForm=true;

  constructor(private authService: AuthService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isModerateur){
      this.router.navigate(["/"]); 
    }
    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
    this.getUser(this.id);
  }
  getUser(id : number){
    this.authService.getUser(id).subscribe(
      (user : any)=>{
        this.user = user;
      },
      (error)=>{
        console.log("erreur")
      }
    )
  }
  
  validForm():boolean{
    this.message="Champ(s) invalide(s): "+'\n';
    let resultat = true;
    if (this.user.nom==""){  this.message+='\n' +"Nom est vide"; resultat= false ;} 
    if (this.user.prenom==""){ this.message+='\n' +"Prenom est vide"; resultat= false ;} 
    if (this.user.grade=="") { this.message+='\n' + "Grade est vide"; resultat= false ;}
    if (this.user.email=="") { this.message+='\n' + "Email est vide"; resultat= false ;}
    if (this.user.password=="") { this.message+='\n' +"Password est vide"; resultat= false ;}
    return resultat;
  }

  saveUser(){
    this.isValidForm=this.validForm();
    if (this.isValidForm){
       this.authService.updateUser(this.user._id, this.user).subscribe(
          ()=>{    
            console.log("OK");   
          },
          (error)=>{
            console.log("Erreur");   
          }
        )
        this.router.navigate(["/manageusers"]);
      }
  }

}
