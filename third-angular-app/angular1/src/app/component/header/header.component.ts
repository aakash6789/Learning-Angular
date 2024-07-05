import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
title:string='Task-Tracker';
showAddTask?:boolean=false;
subscription?:Subscription;
constructor(private uiService:UiService ){
 this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value));
}
toggleAddTask(){
console.log("Toggled");
this.uiService.toggleAddTask();
}
}
