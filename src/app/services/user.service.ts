import { Injectable } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any = [];

  constructor() { }

  createUser(user: User){
    if(this.getUser(user.id) != null){
      return false;
    }
    this.users.push(user);
    return true;
  }
  getUser(id: Number){
    for(var i = 0; i < this.users.length; i++){
      var user = this.users[i];
      if(user.id = id){
        return user;
      }
    }
    return null;
  }
  updateUser(user: User){
    this.deleteUser(user);
    this.createUser(user);
  }
  deleteUser(user: User){
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
  addSessionObj(){

  }
  removeSessionObj(){

  }
}
