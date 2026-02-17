import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
      title:string=" faten"
      age:number=20
      forms:FormGroup
   constructor(  private fb: FormBuilder)   {
    this.forms= fb.group({
      email:["feten.jlidiisimg.tn@gmail.com",Validators.email],
      password: ["", Validators.minLength(4)]

    })
   }

  ngOnInit(): void {
    

  }
submit(){

}
}