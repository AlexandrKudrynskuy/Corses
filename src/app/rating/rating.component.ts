import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent 
{
  public stars: number[] = [1, 2, 3, 4, 5 ];

  public ratingValue: number = 3.5;
  

  public setRating(value: number) {
    this.ratingValue = value;
  }
}
