import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';

@Component({
  selector: 'personal-cabinet-main',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './personal.cabinet.component.html',
  styleUrl: './personal.cabinet.component.scss'
})
export class PersonalCabinetMain 
{
 
}
