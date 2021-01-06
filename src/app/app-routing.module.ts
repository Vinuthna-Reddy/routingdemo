import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'EmployeeList',component:EmployeelistComponent},
  {path:'EmployeeDetails',component:EmployeedetailsComponent},
  {path:'DepartmentList',component:DepartmentlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
