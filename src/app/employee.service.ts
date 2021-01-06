import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees():any{
    return [{id:101,name:"ABC",loc:"ASD"},
    {id:102,name:"DEF",loc:"ASD"}]
  }
}

