import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { Listpatient } from './listpatient/listpatient';
import { Detail } from './detail/detail';
import { Update } from './update/update';
import { Delete } from './delete/delete';
import { Create } from './create/create';


@NgModule({
  declarations: [
    Listpatient,
    Detail,
    Update,
    Delete,
    Create
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
