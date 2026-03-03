import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { text } from 'stream/consumers';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title: string = " faten"
  age: number = 20
  forms: FormGroup
  constructor(private fb: FormBuilder, private authService: Auth , private router:Router) {
    this.forms = fb.group({
    email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      password: ["", [Validators.minLength(4),Validators.required]]

    })
  }
  submit() {
    const expiresIn = 24 * 60 * 60 * 1000; 
  const expirationDate = new Date(new Date().getTime() + expiresIn);
    this.authService.login(this.forms.value).subscribe(data => {
     document.cookie = `idUser=${data.user.id}; Max-Age=${expirationDate}; path=/`;
          document.cookie = `token=${data.access}; Max-Age=${expirationDate}; path=/`;
          document.cookie = `firstName=${data.user.first_name}; Max-Age=${expirationDate}; path=/`;
          document.cookie = `lastName=${data.user.last_name}; Max-Age=${expirationDate}; path=/`;
          document.cookie = `role=${data.user.role}; Max-Age=${expirationDate}; path=/`;

           this.router.navigate(['/dashboard']); 
            })
  }
}