import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-update',
  templateUrl: './update.html',
  styleUrls: ['./update.css']
})
export class Update implements OnInit {

  patientForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(150)]],
      weight: ['', [Validators.required, Validators.min(0)]],
      height: ['', [Validators.required, Validators.min(0)]],
      chronic_diseases: ['', [Validators.required]]
    });
  }

  get f() {
    return this.patientForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.patientForm.invalid) {
      return;
    }

    console.log('Form Value:', this.patientForm.value);

    // TODO: envoyer les données au backend
    alert('Patient updated successfully!');

    this.resetForm();
  }

  resetForm(): void {
    this.submitted = false;
    this.patientForm.reset();
  }

}