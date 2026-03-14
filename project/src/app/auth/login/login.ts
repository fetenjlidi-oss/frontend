import { Component, OnInit, signal } from '@angular/core';
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
  activeTab    = signal<'login' | 'register'>('login');
  
  title: string = " faten"
    isLoading    = signal(false);
      showPassword = signal(false);
  loginError   = signal('');
  currentYear  = new Date().getFullYear();

  age: number = 20
  forms: FormGroup
  constructor(private fb: FormBuilder, private authService: Auth , private router:Router) {
    this.forms = fb.group({
    email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      password: ["", [Validators.minLength(4),Validators.required]]

    })
  }
  
    get email()    { return this.forms.get('email');    }
  get password() { return this.forms.get('password'); }
 
  togglePassword(): void {
    this.showPassword.update(v => !v);
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
             setTimeout(() => {
      this.isLoading.set(false);
      console.log('Login payload:', this.forms.value);
      // On error → this.loginError.set('Invalid credentials. Please try again.');
    }, 1500);
            })
  }
    switchTab(tab: 'login' | 'register'): void {
    this.activeTab.set(tab);
  }

}