import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (this.authService.user!=null){
      const reqM=req.clone({setHeaders:{
          Authorization: 'Bearer '+this.authService.user.access_token
        }});
      return next.handle(reqM);
    }else{
      return next.handle(req);
    }

  }
}
