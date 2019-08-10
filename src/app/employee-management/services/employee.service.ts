import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { EmployeeListItem } from '../models/employee-list-item';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
  private url = environment.apiUrl + 'api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<EmployeeListItem>> {
    return this.http.get<Array<EmployeeListItem>>(this.url);
  }
}