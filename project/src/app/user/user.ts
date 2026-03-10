import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserC } from './user-c';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http:HttpClient){

  }
  
  AddUser( user:UserC): Observable<UserC>{
    console.log(user)
    return  this.http.post("http://127.0.0.1:8000/user/users/create/",user) as Observable<UserC>
  }
  getAllUser(){
    return this.http.get("http://localhost:8000/user/users/") as Observable<any>
  }
  getUserById(id:number){
    return this.http.get("http://localhost:8000/user/users/"+JSON.stringify(id))
  }
  updateUser(id:number,user:UserC){
    return this.http.patch("http://localhost:8000/user/users/"+JSON.stringify(id)+"/update/",user) as Observable<UserC>
  }
  deleteUser(id:number){
    return this.http.delete("http://localhost:8000/user/users/"+JSON.stringify(id))
  }

}
