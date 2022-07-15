import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin, ILoginForm } from 'src/app/interface/app.types';
import { UserModule } from '../../user/user.module';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!:FormGroup
  userList:ILogin[] = [];
  loginData!:ILoginForm;
  userData:ILogin[] = [];
  isLoading:boolean = false;
  constructor(public fb:FormBuilder, private authService:AuthService, private router:Router) { }

  async ngOnInit() {
   
    console.log(this.userData);
  

    this.userList = await this.authService.getLoginDetails();
    console.log(this.userList);
        this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }


  onSubmit(loginForm:FormGroup) {

    this.authService.validateUser(loginForm.value);
  this.loginData = {
    email: String(this.loginForm.value.email),
    password: String(this.loginForm.value.password),
  };
  this.router.navigate([`${localStorage.getItem('role')}`])
  alert('done');
  // this.userList.forEach((user:ILogin) => {
  //   window.localStorage.setItem('token', user.role);

  //   if (
  //     this.loginData.email == user.email &&
  //     this.loginData.password == user.password
  //   ) {
  //     console.log(user.role);
  //     if (user.role == 'doctor') {
  //       this.router.navigateByUrl('doctor');
  //     }
  //     if (user.role == 'admin') {
  //       this.router.navigateByUrl('admin');
  //     }
  //     if (user.role == 'nurse') {
  //       this.router.navigateByUrl('nurse');
  //     }
  //   }
  // });
  }

}
