import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  id: number;
  data = {};
  employees = [];
  exist = false;
  EmployeeObject = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  updateProduct(product) {
    this.EmployeeObject = {
       id: product.id,
       name: product.name,
       address: product.address,
        birth: product.birth,
        email: product.email,
        gender: product.gender
    };
    const url = `${'http://localhost:5555/posts'}/${this.id}`;
    this.http.put(url, JSON.stringify(this.EmployeeObject), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnInit() {
    // To Show Data
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get('http://localhost:5555/posts').subscribe(
      (res: Response) => {
        this.employees = res.json();
        for (let i = 0; i < this.employees.length ; i++) {
          // tslint:disable-next-line:radix
          if (parseInt(this.employees[i].id) === this.id) {
            this.exist = true;
            this.data = this.employees[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    );
  }

}
