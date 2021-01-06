import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbindingdemo',
  //templateUrl: './classbindingdemo.component.html',
  template:`
  <h2 class="text-success">Example for Class Binding</h2>
  
  <h2 [class]="successclass">Example for class property binding</h2>

  <h2 class="text-special" [class]="successclass">
  Example for class attribute and class property binding</h2>

  <h2 [class.text-failure]="hasError">
  class property with bool var </h2>

  <h2 [ngClass]="
  {'text-success':!hasError,
  'text-failure':hasError,
  'text-special':isSpecial}">Class binding with object</h2>
  
  `,

  //styleUrls: ['./classbindingdemo.component.css']
  styles:[`.text-success{
    color: green;
}
.text-failure{
    color: red;
}
.text-special{
    font-style: italic;
}
  
  `]
})
export class ClassbindingdemoComponent implements OnInit {

  public successclass="text-success";
  public hasError=true;
  public isSpecial=true;
  constructor() { }

  ngOnInit(): void {
  }

}
