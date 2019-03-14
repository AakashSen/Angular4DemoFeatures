import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class Authguard implements CanActivate{

  constructor(private authService: AuthService, private route:Router) { }

  canActivate(route , state: RouterStateSnapshot) {
   
    if(this.authService.isLoggedIn()) return true;
     
    this.route.navigate(['/login'], { queryParams : {returnUrl : state.url} } );
    return false;
  }

}
