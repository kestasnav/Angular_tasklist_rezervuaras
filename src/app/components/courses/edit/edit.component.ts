import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";
import {Course} from "../../../models/Course";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id:number;
  public name:string|null=null;

  constructor(
    private route:ActivatedRoute,
    private courseService:CoursesService,
    private router:Router,
  ) {
    this.id=this.route.snapshot.params['id'];
    courseService.getCourse(this.id).subscribe((course)=>{
      this.name=course.name;
    console.log(this.name);
    });
  }

  ngOnInit(): void {
  }

  public onClickSave(f:NgForm){

    const course:Course=<Course>f.value;
      this.courseService.updateCourse(course).subscribe(()=>{
        this.router.navigate(["/courses"]);
      });

  }

}
