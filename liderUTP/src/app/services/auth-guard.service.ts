import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  constructor(private auth:AuthServiceService,private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this.auth.loggedIn)
   return this.auth.loggedIn;
  }
}
