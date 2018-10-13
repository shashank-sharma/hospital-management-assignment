import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable()
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  registerUser(json) {
    console.log(json);
    return this.http.post(environment.apiUrl + '/api/v1/users/', json, this.httpOptions)
  }

  loginUser(json) {
    return this.http.post(environment.apiUrl + '/api/login', json, this.httpOptions)
  }


}
