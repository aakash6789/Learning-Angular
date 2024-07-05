import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
  FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output () onAddTask:EventEmitter<Task> =new EventEmitter;
text?:string;
day?:string;
reminder?:boolean=false ;
showAddTask?:boolean;
subscription:Subscription;

constructor(private uiService:UiService){
  this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value));
}

onSubmit(){
  if(!this.text){
    alert('Task cannot be empty');
    return ;
  }

  const newTask:Task={
     text:this.text,
     day:this.day,
     reminder:this.reminder
  }

  this.onAddTask.emit(newTask);
  this.day='';
  this.text='';
  this.reminder=false;
}

}
