import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    this.authService.isLogged();
  }

  logout(): void{
    this.authService.logout().subscribe(
      ()=>{
        this.authService.connectedUser = null;
        this.authService.isModerateur = false;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
