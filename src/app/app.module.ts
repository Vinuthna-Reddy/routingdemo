import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeService } from './employee.service';
import { ClassbindingdemoComponent } from './classbindingdemo/classbindingdemo.component';
import { StylebindingdemoComponent } from './stylebindingdemo/stylebindingdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    DepartmentlistComponent,
    NavigationComponent,
    ClassbindingdemoComponent,
    StylebindingdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
