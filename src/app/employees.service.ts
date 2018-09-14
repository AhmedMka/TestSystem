import { Injectable } from '@angular/core';
import { Employees } from './shared/employees.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  Url = 'http://localhost:5555/posts';

  constructor(private http: HttpClient, private router: Router) {}
  getUsers() {
    return this.http.get<Employees[]>(this.Url); }

  createUser(employee: Employees) { return this.http.post(this.Url, employee); }

  deleteUser(id: number)        { return this.http.delete(this.Url + '/' + id); }

  getUserById(id: number)     { return this.http.get<Employees>(this.Url + '/' + id); }
}
