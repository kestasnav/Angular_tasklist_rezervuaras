import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css']
})
export class RezervuarasComponent implements OnInit {
  public talpa:number|null=null;
  public laikas:number|null=null;
  public greitis:number|null=null;
  public procentai:number|null=null;

  constructor() { }

  ngOnInit(): void {
  }
  public skaiciuoti(){
     if (this.laikas!=null && this.greitis!=null && this.talpa !=null){
       this.procentai = Number ((((this.laikas)*(this.greitis)/this.talpa)*100).toFixed(2));

     }

  }
}
