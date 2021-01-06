import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebindingdemo',
  //templateUrl: './stylebindingdemo.component.html',
  //styleUrls: ['./stylebindingdemo.component.css']
  template:`<h2 [ngStyle]="{color:getColor()}"
  [ngClass]="{online:serverStatus==='online'}">
  server id:{{serverId}}
  <br>
  server status is: {{serverStatus}} </h2>`,
  styles:[`.online{
    background-color:silver;
  }
  
  `]
})
export class StylebindingdemoComponent implements OnInit {

  public serverId:number=10;
  public serverStatus:string="";
  constructor() { 
    this.serverStatus=Math.random()>0.5?'online':'offline'
  }

  ngOnInit(): void {
  }
getColor(){
return this.serverStatus=="online"?'green':'red';
}
}
