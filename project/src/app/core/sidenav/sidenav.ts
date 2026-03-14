import { Component, OnInit, signal } from '@angular/core';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  hasChildren?: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav implements OnInit {
 
  user = {
    name: 'Danielle Garner',
    avatar: ' ',
  };
 
  navItems: NavItem[] = [
    { label: 'user',     icon: 'logistics',  route: '/user/list'           },

  ];
 
  active = signal('/user');
  setActive(route: string) { this.active.set(route); }
  getCookie(name: string): string | null {
  const cookies = document.cookie.split('; ');
  const found = cookies.find(c => c.startsWith(name + '='));
  return found ? decodeURIComponent(found.split('=')[1]) : null;
  
}
ngOnInit(): void {
  const firstName = this.getCookie('firstName') || 'User';
  const lastName = this.getCookie('lastName') || '';
    this.user = {
    name: `${firstName} ${lastName}`.trim() || 'User',
    avatar: ' ',
  };
}
}