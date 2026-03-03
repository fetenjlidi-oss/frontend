import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http:HttpClient){

  }
login(userLogin:UserLogin){
   return this.http.post("http://localhost:8000/user/users/login/",userLogin) as Observable<any>
}
}
