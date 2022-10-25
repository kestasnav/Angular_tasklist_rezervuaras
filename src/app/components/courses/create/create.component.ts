import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";
import {Course} from "../../../models/Course";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public id:number|null=null;
  public name:string|null=null;

  constructor(
      private route:ActivatedRoute,
      private courseService:CoursesService,
      private router:Router,
  ) {    }

  ngOnInit(): void {
  }
  public onClickSave(){
    if (this.name){
      const course:Course={
        id:this.id,
        name:this.name,
      };
      this.courseService.insertCourse(course).subscribe(()=>{
        this.router.navigate(["/courses"]);
      });
    };
  }

}
