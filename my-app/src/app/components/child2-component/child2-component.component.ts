import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.css']
})
export class Child2ComponentComponent {
  @Input() message:string='';

  @Output() eventEmit = new EventEmitter();

  fruits=['mango','banana','orange','apple'];

  sentToParent(){
    this.eventEmit.emit(this.fruits);
  }
}
