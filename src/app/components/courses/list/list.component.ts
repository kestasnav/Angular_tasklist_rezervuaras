import { Component, OnInit } from '@angular/core';
import {Course} from "../../../models/Course";
import {CoursesService} from "../../../services/courses.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public courses:Course[]=[];

  constructor(private courseService:CoursesService) {
    this.loadData();
  }

  private loadData(){
    this.courseService.getCourses().subscribe((courses)=>{
      this.courses=courses;

    })
  }

  ngOnInit(): void {
  }

  public onClickDelete(id:number|null){
    if (id){
      this.courseService.deleteCourse(id).subscribe(()=>{
        this.loadData();
      });
    }
  }

}
