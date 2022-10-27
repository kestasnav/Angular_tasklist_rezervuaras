import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    user:User|null=null;
  constructor( private authService:AuthService) {
        this.user=authService.user;
  }

  ngOnInit(): void {
  }

  public onClickLogout(){
    this.authService.logout();
  }

}
