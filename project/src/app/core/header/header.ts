import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css'], 
})
export class Header implements OnInit {

  firstName?: string | null;
  lastName?: string | null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.firstName = this.getCookie('firstName');
    this.lastName = this.getCookie('lastName');
  }

  getCookie(name: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
      }
    }
    return null;
  }
}