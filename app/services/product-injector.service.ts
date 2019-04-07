import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductInjectorService {

  constructor(private http:HttpClient) { 
    
  }

  getProducts():Observable<any>{
    return this.http.get<Product[][]>('../models');
  }
}
