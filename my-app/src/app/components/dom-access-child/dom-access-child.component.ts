import { Component } from '@angular/core';

@Component({
  selector: 'app-dom-access-child',
  templateUrl: './dom-access-child.component.html',
  styleUrls: ['./dom-access-child.component.css']
})
export class DomAccessChildComponent {
  message:string='hello, from child!!'

  changeMessage(){
    this.message = 'message changed!!';
  }
}
