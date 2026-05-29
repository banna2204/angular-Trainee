import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users:string[]=[];

  @Output() eventemit = new EventEmitter();

  editUser(user:string,id:number){
    this.eventemit.emit({user,id});
  }
}
