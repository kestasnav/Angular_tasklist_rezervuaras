import {EventEmitter, Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {Type} from "../models/Type";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks:Task[]=[];
  public _types:Type[]=[];

  private _taskUpdate=new EventEmitter();


  constructor() {
    this.load();
  }
  public get taskUpdate(){
    return this._taskUpdate;
  }

  public addTask(text:string, type:string){
    this._tasks.push(new Task(text, type));
    this.save();
    this._taskUpdate.emit();
  }
  public get tasks(){
    return this._tasks;
  }
  public get types(){
    return this._types;
  }

  public update(i:number, text:string, type:string){
    this._tasks[i].text=text;
    this._tasks[i].type=type;
    this._taskUpdate.emit();
  }

  public save(){
    localStorage.setItem('tasks',JSON.stringify(this._tasks));
  }

  public delete(i:number){
    this._tasks.splice(i,1);
    this.save();
    this._taskUpdate.emit();
  }

  public load(){
    const data=localStorage.getItem('tasks');
    if (data!=null){
      this._tasks=JSON.parse(data);
    }
  }
}
