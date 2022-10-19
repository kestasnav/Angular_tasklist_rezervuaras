import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  public text:string|null=null;
  public type:string|null="Pasirinkite tipą";
  public types:any=["Skubus", "Rutininis", "Neskubus", "Ypač skubus"];

  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
  }
  public addTask(){
    if (this.text!=null && this.type!=null){
      this.taskService.addTask(this.text,this.type);
      this.text=null;
      this.type="Pasirinkite tipą";
    }
  }
}
