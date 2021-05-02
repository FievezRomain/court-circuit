import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  utilisateur?: User;
  isConnected: Boolean = false;
  isModerateur: Boolean = false;

  constructor(public userService : UserService) { }

  ngOnInit(): void {
    this.utilisateur = new User();
    if(this.utilisateur.grade == "moderateur"){
      this.isModerateur = true;
    }
  }

}
