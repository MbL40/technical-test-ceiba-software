import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from '@feature/login/login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  public lgn: LoginComponent;
  constructor(private router: Router) {

  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }



}
