import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { ShareModule } from '../share/share.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AdminComponent,
    DoctorComponent,
    NurseComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatButtonModule
  ]
})
export class UserModule { }
