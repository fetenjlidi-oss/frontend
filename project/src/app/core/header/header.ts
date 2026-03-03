import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  firstName?:string
  lastName?: string ;
  ngOnInit(): void {
    this.firstName= this.getCookie('firstName');
    this.lastName=this.getCookie('lastName');

  }
getCookie(name: string): string | undefined {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split(';');

  for (let cookie of cookiesArray) {
    cookie = cookie.trim();

    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }

  return undefined;
}
}
