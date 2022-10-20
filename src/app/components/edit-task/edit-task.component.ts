import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public text:string|null=null;
  public type:string|null="";
  public index:number|null=null;
  public types:any=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];

  constructor(
    private taskService:TasksService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.index=this.route.snapshot.params['id'];
    if (this.index!=null){
      const task=this.taskService.tasks[this.index];
      this.text=task.text;
      this.type=task.type;
    }

  }

  ngOnInit(): void {
  }
  public update(){
    if (this.index!=null && this.text!=null && this.type!=null){
      this.taskService.update(this.index, this.text, this.type);
      this.router.navigate(["/"]);
    }
  }
}
