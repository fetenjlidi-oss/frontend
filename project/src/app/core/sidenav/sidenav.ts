import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.css']
})
export class Sidenav {

  showPatients = false;
  showRappel = false;
  showUsers = false;

  togglePatients() {
    this.showPatients = !this.showPatients;
    this.showRappel = false;
    this.showUsers = false;
  }

  toggleRappel() {
    this.showRappel = !this.showRappel;
    this.showPatients = false;
    this.showUsers = false;
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
    this.showPatients = false;
    this.showRappel = false;
  }
}