import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {
  private subject = new Subject<any>();

  sendUsername(username: string): void {
    this.subject.next( username );
  }

  getUsername(): Observable<any> {
    return this.subject.asObservable();
  }

}
