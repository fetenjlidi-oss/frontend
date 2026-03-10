import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create implements OnInit {
  patientForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

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
      chronic_diseases: ['', [Validators.required]],
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
    // TODO: Send data to backend service
    alert('Patient created successfully!');
    this.resetForm();
  }

  resetForm(): void {
    this.submitted = false;
    this.patientForm.reset();
  }
}
