import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  submit():any{
    this.authService.login(this.email, this.password).subscribe(
      (userInfo:any)=>{
        this.authService.connectedUser = userInfo;
        if(userInfo.grade == "moderateur"){
          this.authService.isModerateur = true;
        }
        this.router.navigate(["/"]);
      }, 
      (error)=>{
        console.log("error:", error);
      }
    )
  }
}
