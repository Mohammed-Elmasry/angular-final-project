import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductTransferService {
  private subject = new Subject<any>();

  sendProduct(product: Product): void {
    this.subject.next({ package: product });
  }

  clearProduct(): void {
    this.subject.next();
  }

  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
