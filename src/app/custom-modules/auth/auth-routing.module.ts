import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../user/admin/admin.component';
import { DoctorComponent } from '../user/doctor/doctor.component';
import { NurseComponent } from '../user/nurse/nurse.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nurse',
    component: NurseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }