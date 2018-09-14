import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee = {} ;
  constructor(private employeeService: EmployeesService, private router: Router) {}
  ngOnInit() {}
  save(emp) {
    this.employeeService.createUser(emp)
    .subscribe( data => {
      this.router.navigate(['/']);
    });
  }
}
