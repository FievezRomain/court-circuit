import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connectedUser:any = null;
  isModerateur:Boolean = false;
  constructor(private http: HttpClient) { }

  login(email: any, password: any):Observable<any>{
    return this.http.post("http://localhost:3000/login", {email:email, password:password}, {withCredentials: true});
  }

  logout():Observable<any>{
    return this.http.get("http://localhost:3000/logout", {withCredentials: true});
  }

  register(email:any, password:any, nom:any, prenom:any):Observable<any>{
    return this.http.post("http://localhost:3000/register", {email:email, password:password, nom:nom, prenom:prenom}, {withCredentials: true});
  }

  isLogged(){
    this.http.get("http://localhost:3000/isLogged", {withCredentials: true}).subscribe(
      (connectedUser)=>{
        this.connectedUser = connectedUser;
        if(this.connectedUser.grade == "moderateur"){
          this.isModerateur = true;
        }
        console.log("connected");
      },
      (error)=>{
        console.log("not connected");
      }
    )
  }

  updateUser(id: Number, user : User): Observable<any>{
    return this.http.put("http://localhost:3000/users/"+ id, user);
  } //verifier _id

  deleteUser(id : Number): Observable<any>{
    return this.http.delete("http://localhost:3000/users/"+ id);
  }

  getUsers():Observable<any>{
    return this.http.get("http://localhost:3000/users");
  }
  getUser(id : number):Observable<any>{
    return this.http.get("http://localhost:3000/users/"+id);
  }
}
