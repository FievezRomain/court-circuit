import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
        if(this.connectedUser.grade == "Moderateur"){
          this.isModerateur = true;
        }
        console.log("connected");
      },
      (error)=>{
        console.log("not connected");
      }
    )
  }
}
