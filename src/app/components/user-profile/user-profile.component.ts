import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user:User|any=null;

  constructor(private http:HttpClient, private router:Router, private authService:AuthService) {
    if (this.authService.user!=null) {
      this.http.get('http://localhost/Laravel/baltictalents/public/api/auth/user-profile').subscribe({
          next: (response) => {
            this.user=response;

          },
          error: (error) => {
            console.log(error);
            router.navigate(['/login']);
          }
        }
      )
    }else{
      router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
  }

}
