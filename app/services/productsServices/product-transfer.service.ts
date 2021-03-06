import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductTransferService {
  private subject = new Subject<any>();

  sendProduct(product: Product): void {
    this.subject.next( product );
    localStorage.setItem("product", JSON.stringify(product));
    console.log("Picked up products in service");
  }

  clearProduct(): void {
    this.subject.next();
  }

  getProduct(): Observable<any> {
    console.log("delivering product")
    return this.subject.asObservable();
  }

  constructor() { }
}
