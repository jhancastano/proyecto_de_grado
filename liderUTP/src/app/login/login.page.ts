import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
 
  constructor(public formBuilder: FormBuilder,public auth:AuthServiceService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      service:'moodle_mobile_app'

  });
   }

  ngOnInit() {

  }
  login() {
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe((resp:any)=>{console.log(resp)},error=>'errrr',()=>'ss')
    //this.auth.login(this.loginForm.value)
  }


}
