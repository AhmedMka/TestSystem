import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { EmployeesService } from '../employees.service';
import { Employees } from '../shared/employees.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employees[];

  constructor(private employeService: EmployeesService) {


  }
  ngOnInit() {
    this.employeService.getUsers()
    .subscribe( data => {
      this.employees = data;
    });
  }

  deleteUser(emp: Employees) {
    this.employeService.deleteUser(emp.id)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== emp);
      });
  }

}
