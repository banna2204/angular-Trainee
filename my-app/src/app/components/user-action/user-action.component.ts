import { Component } from '@angular/core';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent {
  users:string[]=[];
  user:string=''; 
  isEdit:boolean=false;
  index:number=-1;

  addUser(){
    this.users.push(this.user);
    this.user='';
  }
  updateUser(){
    this.users[this.index] = this.user;
    this.isEdit = false;
  }

  getUserForEdit(user:any){
    this.isEdit=true;
    this.user = user.user;
     this.index = this.users.findIndex(u => u === user.user);

    if (this.index !== -1) {
      console.log('not update');
    }

  }
  
}
