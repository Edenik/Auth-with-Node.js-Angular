import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {User } from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  login(user:User)  : any{
    return this.http.post<User>(`${environment.apiEvents}/auth/login`, user);
  }

  register(user:User) :Observable<any> {
    return this.http.post<any>(`${environment.apiEvents}/auth/register`, user);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
