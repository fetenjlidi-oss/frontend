import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  patientsActifs = 1248;
  prisesOubliees = 342;
  rdvManques = 89;
  tauxAdhesion = 78;
}
