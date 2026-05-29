import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  onKey(event:KeyboardEvent){
    console.log(event.key)
  }

  onKeyDown(event:KeyboardEvent){
    console.log(event.key);
  }

  onKeyEnter(){
    console.log('save')
  }

  username:string='shubham';

  email:string='shubham@gmail.com'
}
