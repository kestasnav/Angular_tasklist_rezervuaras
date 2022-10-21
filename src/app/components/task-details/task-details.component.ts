import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  public count:number|null=null;
  public types=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];
  public countTypes:number=0;

  private countcalculate(){
    const tasks=this.taskService.tasks;
    this.count=tasks.length;
  }
 public calculate(tipas:string){
    const tasks=this.taskService.tasks;
    this.countTypes=0;
    tasks.forEach((task)=> {
      if (task.type == tipas ) {
        this.countTypes++;
      }
    });

return this.countTypes;
  }

  constructor(private taskService:TasksService) {
      this.countcalculate();

    this.taskService.taskUpdate.subscribe(()=> {
      this.count = this.taskService.tasks.length
    });
  }

  ngOnInit(): void {
  }

}
