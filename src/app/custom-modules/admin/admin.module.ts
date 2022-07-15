import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { NurseListComponent } from './nurse-list/nurse-list.component';
import { RequestsComponent } from './requests/requests.component';
import { NotificationComponent } from './notification/notification.component';
import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DoctorListComponent,
    NurseListComponent,
    RequestsComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
