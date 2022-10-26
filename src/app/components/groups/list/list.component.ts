import { Component, OnInit } from '@angular/core';

import {CoursesService} from "../../../services/courses.service";
import {Group} from "../../../models/Groups";
import {GroupsService} from "../../../services/groups.service";
import {Course} from "../../../models/Course";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class GroupListComponent implements OnInit {

  public groups:Group[]=[];


  constructor(private groupService:GroupsService) {
    this.loadData();
  }

  private loadData(){
    this.groupService.getGroups().subscribe((groups)=>{
      this.groups=groups;

    })


  }

  ngOnInit(): void {
  }

  // public onClickDelete(id:number|null){
  //   if (id){
  //     this.courseService.deleteCourse(id).subscribe(()=>{
  //       this.loadData();
  //     });
  //   }
  // }

}
