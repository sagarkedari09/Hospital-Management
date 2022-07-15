import { Injectable } from '@angular/core';
import { ILogin, ILoginForm } from 'src/app/interface/app.types';
import { backendStudentList } from 'src/app/mock/backend';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userData:ILogin[] = [];
    getData:ILogin[] = [];
  constructor() { }

  async getLoginDetails(){
    const userList = await backendStudentList();  
    this.userData = await backendStudentList(); 
    return userList;
  }

  validateUser(data:ILoginForm){
     this.getData = this.userData.filter(ele=>ele.email===data.email && ele.password === data.password);
     this.getData.length>0?localStorage.setItem('role', this.getData[0].role):alert('no user found')
     console.log(this.getData[0].role);
     
  }

  checkRole(){
   const checkUser = localStorage.getItem('role')?true:false;
   return checkUser;
  }
}
