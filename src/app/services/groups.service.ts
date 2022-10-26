import { Injectable } from '@angular/core';
import {Course} from "../models/Course";
import {HttpClient} from "@angular/common/http";
import {Group} from "../models/Groups";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }

  public getGroups(){
    return this.http.get<Group[]>('http://localhost/Laravel/baltictalents/public/api/groups');
  }

  public insertGroup(group:Group){
    return this.http.post<Group>('http://localhost/Laravel/baltictalents/public/api/groups',group);
  }
}
