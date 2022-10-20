import {Component, EventEmitter, OnInit} from '@angular/core';
import {Task} from "../../models/Task";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks:Task[]=[];

  constructor(private taskService:TasksService) {
    this.tasks=taskService.tasks;

  }

  ngOnInit(): void {
  }
  public delete(i:number){
    this.taskService.delete(i);
    this.taskService.taskUpdate.emit();

      }
}
