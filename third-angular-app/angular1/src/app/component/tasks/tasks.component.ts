import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Observable,of } from 'rxjs';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { provideHttpClient } from '@angular/common/http';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks:Task[]=TASKS;
  constructor(private taskService:TaskService){}
  
  ngOnInit():void{
   this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id!==task.id));
  }

  toggleReminder(task:Task){
    console.log("Remin",task);
    task.reminder=!task.reminder;
    this.taskService.updateReminderTask(task).subscribe();
  }
  addTask(task:Task){
  console.log(task);
  this.taskService.addTask(task).subscribe((task)=>this.tasks.push(task));
  }
}
