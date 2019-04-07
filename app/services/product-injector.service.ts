import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductInjectorService {
  private productsUrl = 'http://localhost:4200/assets/products.json';
  private productsObservable;
  constructor(private http:HttpClient) { 
    this.productsObservable = this.http.get(this.productsUrl); //this returns an observable
  }

  /* getProducts():Observable<any>{
    
  } */

  logProducts():void{
    console.log(this.productsObservable);
  }

  getProducts(): Observable<any>{
    return this.productsObservable;
  }
}
