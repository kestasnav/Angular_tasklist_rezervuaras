import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string|null=null;
  public password:string|null=null;
  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  public onClickLogin(){
    if (this.email && this.password){
      this.authService.login(this.email,this.password).subscribe({
        next: (response) => {
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.log(err);
        }

      });
    }

  }

}
