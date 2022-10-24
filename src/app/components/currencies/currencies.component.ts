import { Component, OnInit } from '@angular/core'
import {Currency} from "../../models/Currency";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  public currency:any=null;
  public key:any=null;
  public base:string|null=null;
  public loading=true;
  public error=false;

  public fromCurrency:any='EUR';
  public toCurrency:any='USD';

  public keys:any;
  public countries:any;

  constructor(private currenciesService:CurrencyService) {
      this.loadCurrency();
      this.getKeysMethod();

  }

private getKeysMethod() {
    this.currenciesService.getKeys().subscribe({
      next:(response)=>{
        this.keys=Object.keys(response);
        this.countries=Object.values(response);

      }
    })
}

  private loadCurrency(){
    this.loading=true;
    this.error=false;
    this.currenciesService.getCurrency(this.fromCurrency, this.toCurrency).subscribe(
      {
        next:(response)=>{
          this.currency=Object.values(response.rates);
          this.key=Object.keys(response.rates);
          this.base=response.base;

          this.loading=false;
        },
        error:(err)=>{
          this.error=true;
          this.loading=false;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  public clickLoadCurrency(){
    this.loadCurrency();
  }

}
