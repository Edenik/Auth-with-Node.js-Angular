import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  msg:string;

  userDetailes = {
    email : null,
    password: null,
  };

  loginUser(){
   if(this.userDetailes.email != null && this.userDetailes.password != null){
    this.authService.login(this.userDetailes).subscribe(res => {
      this.router.navigate(['/special'])
    }, err => {
      if(err){
        this.msg = 'Login Failed';
      } 
    });
   } else{
    this.msg = 'All fields are required!'
   }
  }
  
  ngOnInit(): void {
  }

}
