import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable()
export class DashboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  getPatientList(data) {
    if (data) {
      return this.http.get(data, this.httpOptions)
    } else {
      return this.http.get(environment.apiUrl + '/api/v1/patient?limit=8', this.httpOptions)
    }
  }

  savePatientDetails(json) {
    console.log(json);
    return this.http.post(environment.apiUrl + '/api/v1/patient/', json, this.httpOptions);
  }

  updatePatientDetails(json) {
    return this.http.post(environment.apiUrl + '/api/patient-details-update', json, this.httpOptions);
  }

}
