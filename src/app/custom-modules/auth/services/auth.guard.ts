import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.checkRole()) {
      alert("Unauthorized Person")
      this.router.navigateByUrl('');
      return false;
    }
    // this.router.navigateByUrl(`${localStorage.getItem('role')}`)
  return true;
  }
}

//   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
//   boolean | Observable<boolean> | Promise<boolean> {
//     return this.canActivate(route, state);
//   }
// }
