import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from "@auth0/angular-jwt";
import { UserServiceService } from './user-service.service';
//import 'rxjs/add/operator/map';
import {} from 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedIn =false;
  isTeacher = false;
  isStudent = false;
/*   jwtHelper:JwtHelperService= new JwtHelperService */
  currentUser='';
  constructor(
    private userService: UserServiceService,
              private router: Router
  ) {
    const token = localStorage.getItem('token');
    if(token){
      this.loggedIn = true;
      this.currentUser= token
    }
   }

   login(emailAndPassword) {
    return  this.userService.login(emailAndPassword)
  }


}
