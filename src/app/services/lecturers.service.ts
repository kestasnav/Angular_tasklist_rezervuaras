import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../models/Course";
import {Lecturer} from "../models/Lecturers";

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  constructor(private http:HttpClient) { }

  public getLecturers(){
    return this.http.get<Lecturer[]>('http://localhost/Laravel/baltictalents/public/api/lecturers');
  }

}
