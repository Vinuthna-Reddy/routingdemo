import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public Employees=[];
  //Employees:any;
  constructor(private _empservice:EmployeeService) { }
  ngOnInit(): void {
    this.Employees=this._empservice.getEmployees();
  }

}
