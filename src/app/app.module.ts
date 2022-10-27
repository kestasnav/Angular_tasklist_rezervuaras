import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { RezervuarasComponent } from './components/rezervuaras/rezervuaras.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import {EditTaskComponent} from "./components/edit-task/edit-task.component";
import { CurrenciesComponent } from './components/currencies/currencies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ListComponent} from './components/courses/list/list.component';
import { EditComponent } from './components/courses/edit/edit.component';
import { CreateComponent } from './components/courses/create/create.component';
import {GroupListComponent} from "./components/groups/list/list.component";
import {CreateGroupComponent} from "./components/groups/create/create.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import {AuthInterceptor} from "./services/auth.interceptor";

const appRoutes:Routes=[
  {path:"", component:TaskListComponent},
  {path:"new", component:NewTaskComponent},
  {path:"rezervuaras", component:RezervuarasComponent},
  {path:"about", component:AboutComponent},
  {path:"edit/:id", component:EditTaskComponent},
  {path:"currencies", component:CurrenciesComponent},
  {path:"courses", component:ListComponent},
  {path:"courses/:id", component:EditComponent},
  {path:"createcourse", component:CreateComponent},
  {path:"groups", component:GroupListComponent},
  {path:"creategroup", component:CreateGroupComponent},
  {path:"profile", component:UserProfileComponent},
  {path:"login", component:LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RezervuarasComponent,
    TaskListComponent,
    NewTaskComponent,
    TaskDetailsComponent,
    NavBarComponent,
    AboutComponent,
    EditTaskComponent,
    CurrenciesComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    GroupListComponent,
    CreateGroupComponent,
    UserProfileComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
