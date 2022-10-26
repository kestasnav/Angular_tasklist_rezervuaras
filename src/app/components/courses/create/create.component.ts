import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";
import {Course} from "../../../models/Course";
import {NgFor} from "@angular/common";
import {NgForm} from "@angular/forms";

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

  public onClickSave(f:NgForm){

    const course:Course=<Course>f.value;
      this.courseService.insertCourse(course).subscribe(()=>{
        this.router.navigate(["/courses"]);
      });

  }

}
