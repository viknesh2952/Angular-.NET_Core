import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  loggedIn: boolean = false;

  currentEvent = new Subject<Event>();
  getCurrentEvent = this.currentEvent.asObservable();

  taskHistory = new BehaviorSubject('');
  getTaskStatus = this.taskHistory.asObservable();

  constructor() { }

  isAuthenticated() {
    const authToken = localStorage.getItem('authToken');
    return this.validateToken(authToken);
  }

  validateToken(authToken: any) {
    if (authToken == 'wsdavbkwe') {
      return true
    }
    else {
      return false
    }
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  authenticate(username: string, password: string): Observable<boolean> {
    if (username === "admin" && password === "12345") {
      localStorage.setItem('authToken', 'wsdavbkwe');
      return of(true)
    }
    else {
      return of(false)
    }
  }
  
  emitEvent(event:Event){
    this.currentEvent.next(event);
  }

  promisedData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Resolved Data');
      },5000)
    });
  }

  taskAllocation(message:string){
    this.taskHistory.next(message);
  }
}
