// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recomended',
//   standalone: true,
//   imports: [],
//   templateUrl: './recomended.component.html',
//   styleUrl: './recomended.component.scss'
// })
// export class RecomendedComponent {

// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../rating/rating.component';
import { Subject_service } from '../../service/Subject_service';

@Component({
  selector: 'main-page-recomended',
  standalone: true,
  imports: [FormsModule, NgbModule, CommonModule, RatingComponent],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.scss'
})
export class MainPageRecomended {
  sub_serv = new Subject_service
  rez=this.sub_serv.SplitArray(4,this.sub_serv.InitTesrSubject());
  public stars: number[] = [1, 2, 3, 4, 5 ];

  public ratingValue: number = 0;
  

  public setRating(value: number) {
    this.ratingValue = value;
  }
}
