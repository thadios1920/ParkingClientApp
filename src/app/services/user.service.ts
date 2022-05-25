import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 

  getUserContent(): Observable<any> {
    return this.http.get(API_URL + 'drivers', { responseType: 'text' });
  }

  
}
