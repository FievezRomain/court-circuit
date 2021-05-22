import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.scss']
})
export class UsersManagerComponent implements OnInit {
  users: Array<User> = new Array<User>();

  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isModerateur){
      this.router.navigate(["/"]); 
    }
    this.getUsers();
  }

  getUsers(){
    this.authService.getUsers().subscribe(
      (produits : Array<User>)=>{
        this.users = produits;
      },
      (error)=>{
        console.log("erreur")
      }
    )
  }
  openDialog(id : Number){
    if(confirm("Ce produit sera définitivement supprimé!")) {
      this.deleteProduct(id);
      this.router.navigate(["/gestioncatalogue"]); 
    }
  }

  deleteProduct(id : Number){
    this.authService.deleteUser(id).subscribe(
      ()=>{
        this.getUsers();
      },
      (error)=>{
        console.log("erreur de suppression")
      }
    )
  }

}
