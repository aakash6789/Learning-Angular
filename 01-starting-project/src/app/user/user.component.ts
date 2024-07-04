import { Component,signal,Input, input, computed, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input() avatar!:string;
  // @Input() name!:string;
  @Input() user?:{
    id:string,
    avatar:string,
    name:string
  }
  // avatar=input<string>();    
  // name=input<string>();
  // id=input<string>();
  @Output() select=new EventEmitter();
  // select=output<string|undefined>();
  // avatar=input<string>();
  //   selectedUser=signal(DUMMY_USERS[1]);
     imagePath=computed(()=>{
      return 'assets/users/'+this.user?.avatar;
    });
    onSelectUser(){
      // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
      // this.selectedUser.set(DUMMY_USERS[randomIndex]);
      this.select.emit(this.user?.id);
     
    }
}
