import { Component, NgModule } from '@angular/core';
import { SubjectClass, Subject_service } from '../../service/Subject_service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from '../../rating/rating.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'free-courses-trends',
  standalone: true,
  imports: [NgbModule, RatingComponent, CommonModule],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.scss'
})
export class FreeCoursesTrendsComponent {
  subject_service = new Subject_service();
  subj_all = this.subject_service.InitTesrSubject();
  subj_free = this.GetFree();
  subj_free_two_rang=this.subject_service.SplitArray(4,this.subj_free);

  public stars: number[] = [1, 2, 3, 4, 5 ];

  public ratingValue: number = 0;
  

  public setRating(value: number) {
    this.ratingValue = value;
  }

  GetFree() {
    var free = new Array<SubjectClass>;
    for (let i = 0; i < this.subj_all.length; i++) {
      if (this.subj_all[i].price === 0) {
        free.push(this.subj_all[i]);
      }

    }
    return free;
  }
}
