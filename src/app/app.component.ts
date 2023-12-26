import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule , RouterOutlet,Header,Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'Course';

}
