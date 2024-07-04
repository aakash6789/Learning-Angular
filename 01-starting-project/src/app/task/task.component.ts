import { Component,input,Input } from '@angular/core';
import { ListTaskComponent } from './list-task/list-task.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ListTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // name=input<string>;
  @Input() isTrue:boolean=false;
  @Input() name?:string| undefined;
  // @Input() tasks?:Array;
  tasks=[];
 onAddTask(){
  this.isTrue=true;
 }

}
