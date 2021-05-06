import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  utilisateur?: User;
  isConnected: Boolean = false;
  isModerateur: Boolean = false;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    this.utilisateur = new User();
    if(this.utilisateur.grade == "moderateur"){
      this.isModerateur = true;
    }
  }

  logout(): void{
    this.authService.logout().subscribe(
      ()=>{

      },
      (error)=>{

      }
    )
  }

}
