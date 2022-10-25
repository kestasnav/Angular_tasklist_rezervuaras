import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../models/Course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  public getCourses(){
    return this.http.get<Course[]>('http://localhost/Laravel/baltictalents/public/api/courses');
  }

  public getCourse(id:number){
    return this.http.get<Course>('http://localhost/Laravel/baltictalents/public/api/courses/'+id);
  }

  public updateCourse(course:Course){
    return this.http.patch<Course>('http://localhost/Laravel/baltictalents/public/api/courses/'+course.id,course);
  }

  public insertCourse(course:Course){
    return this.http.post<Course>('http://localhost/Laravel/baltictalents/public/api/courses',course);
  }

  public deleteCourse(id:number){
    return this.http.delete<any>('http://localhost/Laravel/baltictalents/public/api/courses/'+id);
  }
}
