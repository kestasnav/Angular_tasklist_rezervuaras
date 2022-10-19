import { Injectable } from '@angular/core';
import {Task} from "../models/Task";
import {Type} from "../models/Type";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks:Task[]=[];
  public types:Type[]=[];


  constructor() {
    this.load();
  }

  public addTask(text:string, type:string){
    this._tasks.push(new Task(text, type));
    this.save();
  }
  public get tasks(){
    return this._tasks;
  }
  public save(){
    localStorage.setItem('tasks',JSON.stringify(this._tasks));
  }
  public delete(i:number){
    this._tasks.splice(i,1);
    this.save();
  }

  public load(){
    const data=localStorage.getItem('tasks');
    if (data!=null){
      this._tasks=JSON.parse(data);
    }
  }
}
