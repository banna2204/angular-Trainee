import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  recievedFruit:string[]=[];

  getData(fruits:string[]){
    this.recievedFruit = fruits;
  }

  message:string='hello,from parent component'
}
