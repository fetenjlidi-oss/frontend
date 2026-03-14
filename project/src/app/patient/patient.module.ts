import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { Listpatient } from './listpatient/listpatient';
import { Detail } from './detail/detail';
import { Delete } from './delete/delete';
import { Create } from './create/create';
import { Update } from './update/update';


@NgModule({
  declarations: [
    Listpatient,
    Detail,
    Delete,
    Create,
    Update
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
