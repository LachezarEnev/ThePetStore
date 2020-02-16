import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
  
  canActivate(    
    route: ActivatedRouteSnapshot,    
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check(route);
  }

  check(route): boolean{
    if(this.authService.isAuthenticated() === route.data.isAuthenticated){
      return true;
    }   
    this.router.navigate(['']) 
    return false;
  }
}