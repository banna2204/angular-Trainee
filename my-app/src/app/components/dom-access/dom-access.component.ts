import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomAccessChildComponent } from '../dom-access-child/dom-access-child.component';

@Component({
  selector: 'app-dom-access',
  templateUrl: './dom-access.component.html',
  styleUrls: ['./dom-access.component.css']
})
export class DomAccessComponent {
  @ViewChild('inputVal') inputElement!: ElementRef;

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus();
  }

  @ViewChild(DomAccessChildComponent) child!: DomAccessChildComponent;

  callChildMethod(){
    if(this.child){
      this.child.changeMessage();
    }
  }

}
