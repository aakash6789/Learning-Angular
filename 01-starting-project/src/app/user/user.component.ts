import { Component,signal,Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input() avatar!:string;
  @Input() name!:string;    
  avatar=input<string>();
    selectedUser=signal(DUMMY_USERS[1]);
    get imagePath(){
      return 'assets/users/'+this.selectedUser.avatar;
    }
    onSelectUser(){
      const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
      console.log("Loun re");
      this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }
}
