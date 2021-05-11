import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email:any;
  prenom:any;
  nom:any;
  password:any;

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  submit():any {
    this.authService.register(this.email, this.password, this.nom, this.prenom).subscribe(
      (userInfo:any)=>{
        this.authService.connectedUser = userInfo;
        this.router.navigate(["/"]);
      }, 
      (error)=>{
        console.log("error:", error);
      }
    )
  }
}
