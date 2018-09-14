import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeesService } from './employees.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CustomFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'employeeupdate/:id', component: EmployeeUpdateComponent}

    ]),
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
