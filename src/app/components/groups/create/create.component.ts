import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Course} from "../../../models/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";
import {GroupsService} from "../../../services/groups.service";
import {Group} from "../../../models/Groups";
import {Lecturer} from "../../../models/Lecturers";
import {LecturersService} from "../../../services/lecturers.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateGroupComponent implements OnInit {

  public groups:Group[]=[];
  public courses:Course[]=[];
  public lecturers:Lecturer[]=[];

  constructor(
    private route:ActivatedRoute,
    private groupService:GroupsService,
    private courseService:CoursesService,
    private lectuerService:LecturersService,
    private router:Router,
  ) {
    this.groupService.getGroups().subscribe((groups)=> {
      this.groups = groups;
    });

    this.courseService.getCourses().subscribe((courses)=>{
      this.courses = courses;
    });

    this.lectuerService.getLecturers().subscribe((lecturers)=>{
      this.lecturers=lecturers;
      console.log(this.lecturers);
    })
  }


  ngOnInit(): void {
  }

  public onClickSave(f:NgForm){

    const group:Group=<Group>f.value;
    this.groupService.insertGroup(group).subscribe(()=>{
      this.router.navigate(["/groups"]);
    });

  }
}
