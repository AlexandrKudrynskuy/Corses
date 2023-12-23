import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../rating/rating.component';
import { Subject_service } from '../../service/Subject_service';
@Component({
  selector: 'main-page-trends',
  standalone: true,
  imports: [FormsModule, NgbModule, CommonModule],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.scss'
})
export class MainPageTrends {
  sub_serv = new Subject_service();
  rez=this.sub_serv.SplitArray(4,this.sub_serv.InitTesrSubject());
  public stars: number[] = [1, 2, 3, 4, 5 ];

  public ratingValue: number = 3.5;
  

  public setRating(value: number) {
    this.ratingValue = value;
  }
}
