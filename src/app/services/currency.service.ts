import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../models/Currency";
import {Key} from "../models/Key";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {


  constructor(private http:HttpClient) { }


  public getCurrency(fromCurrency:any, toCurrency:any){
    return this.http.get<Currency>('https://api.frankfurter.app/latest?from='+fromCurrency+'&to='+toCurrency);
  }

  public getKeys(){
    return this.http.get<Key>('https://api.frankfurter.app/currencies');

  }

}
