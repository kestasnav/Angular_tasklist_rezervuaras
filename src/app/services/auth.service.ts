import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:User|null=null;
  constructor(private http: HttpClient, private router:Router) {
    this.loadUser();
  }

  private save(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  private loadUser(){
    const userData=localStorage.getItem('user');
    if (userData!=null) {
      this.user = JSON.parse(userData);
    }
  }

  public logout(){
    localStorage.removeItem('user');
    this.user=null;
    this.router.navigate(['/login']);

  }

  public login(email: string, password: string) {

    return this.http.post<User>('http://localhost/Laravel/baltictalents/public/api/auth/login', {
      email: email,
      password: password
    }).pipe( tap((response)=>{
      this.user=response;
      this.save();
    }));
  }
}
