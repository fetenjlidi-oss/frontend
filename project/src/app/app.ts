import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  showMenu: boolean=true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object , private router:Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
      
        if (event.url === '/auth/login') {
          this.showMenu = false;
        } else {
          if (event.url === '/') {
            if (this.tokenGetter().length == 0) {
              this.showMenu = false;
              this.router.navigate(['auth/login']);
            }
            else {
              this.showMenu = true;
              this.router.navigate(['dashboard']);

            }
          }
          else {
            this.showMenu = true;
          }
        }
      }
    });
  }

   tokenGetter() {
  var name = "token=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
      console.log('Flowbite initialized');
    }
  }
}
