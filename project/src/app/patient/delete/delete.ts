import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Patient {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  age: number;
  weight: number;
  height: number;
  chronic_diseases: string;
}

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete implements OnInit {
  searchForm!: FormGroup;
  deleteForm!: FormGroup;
  submitted = false;
  patientFound: Patient | null = null;
  showConfirmation = false;
  isDeleting = false;

  // Mock data - replace with real API service
  mockPatients: Patient[] = [
    {
      id: '1',
      email: 'john@example.com',
      first_name: 'John',
      last_name: 'Doe',
      age: 35,
      weight: 75,
      height: 180,
      chronic_diseases: 'Hypertension'
    },
    {
      id: '2',
      email: 'jane@example.com',
      first_name: 'Jane',
      last_name: 'Smith',
      age: 28,
      weight: 65,
      height: 165,
      chronic_diseases: 'Diabetes'
    }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeSearchForm();
  }

  initializeSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      searchBy: ['id', [Validators.required]],
      searchValue: ['', [Validators.required]],
    });
  }

  get searchF() {
    return this.searchForm.controls;
  }

  get deleteF() {
    return this.deleteForm?.controls;
  }

  onSearch(): void {
    if (this.searchForm.invalid) {
      return;
    }

    const { searchBy, searchValue } = this.searchForm.value;
    const patient = this.mockPatients.find(
      p => p[searchBy as keyof Patient]?.toString().toLowerCase() === searchValue.toLowerCase()
    );

    if (patient) {
      this.patientFound = patient;
      this.showConfirmation = false;
    } else {
      alert('Patient not found!');
      this.patientFound = null;
    }
  }

  initiateDelete(): void {
    this.showConfirmation = true;
  }

  cancelDelete(): void {
    this.showConfirmation = false;
  }

  confirmDelete(): void {
    if (!this.patientFound) {
      return;
    }

    this.isDeleting = true;

    // Simulate API call
    setTimeout(() => {
      console.log('Patient deleted:', this.patientFound);
      alert(`Patient ${this.patientFound?.first_name} ${this.patientFound?.last_name} has been deleted successfully!`);
      this.resetForm();
      this.isDeleting = false;
    }, 1500);
  }

  resetForm(): void {
    this.searchForm.reset({ searchBy: 'id' });
    this.patientFound = null;
    this.showConfirmation = false;
  }
}
