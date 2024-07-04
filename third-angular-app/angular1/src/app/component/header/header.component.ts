import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
title:string='Task-Tracker';
toggleAddTask(){
console.log("Toggled");
}
}
