import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { RezervuarasComponent } from './components/rezervuaras/rezervuaras.component';


@NgModule({
  declarations: [
    AppComponent,
    RezervuarasComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
