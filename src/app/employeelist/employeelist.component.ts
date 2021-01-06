import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})

export class EmployeelistComponent implements OnInit {
  
  public Employees=[];
  //Employees:any;
  constructor(private _empservice:EmployeeService) { }

  ngOnInit(): void {
    this.Employees=this._empservice.getEmployees();
  }

}
