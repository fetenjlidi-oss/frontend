import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patientclass } from './patientclass';

@Injectable({
  providedIn: 'root',
})
export class Patient {
  constructor(private http:HttpClient){

  }
  
  AddPatient( patient:Patientclass): Observable<Patientclass>{
    console.log(patient)
    return  this.http.post("http://127.0.0.1:8000/patient/create/",patient) as Observable<Patientclass>
  }
  getAllPatient(){
    return this.http.get("http://127.0.0.1:8000/patient/list/") as Observable<any>
  }
  getPatientById(id:number){
    return this.http.get("http://127.0.0.1:8000/patient/detail/"+JSON.stringify(id))
  }
  updatePatient(id:number,patient:Patientclass){
    return this.http.patch("http://127.0.0.1:8000/patient/update/"+JSON.stringify(id)+"/",patient) as Observable<Patientclass>
  }
  deletePatient(id:number){
    return this.http.delete("http://127.0.0.1:8000/patient/delete/"+JSON.stringify(id))
  }
}
