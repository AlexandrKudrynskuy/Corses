import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MainPageComments } from './comments/comments.component';
import { MainPageKeppLearn } from './keep.lern/keep.lern.component';
import { MainPageNewCours } from './new.course/new.course.component';
import { MainPageOurTeacher } from './our.teacher/our.teacher.component';
import { MainPageRecomended } from './recomended/recomended.component';
import { MainPageSubject } from './subject/subject.component';
import { MainPageTrends } from './trends/trends.component';
import { MainPageUpCourses } from './up.courses/up.courses.component';
import { MainPageWaitCourses } from './wait.courses/wait.courses.component';
import { MainPageWaitYou } from './wait.you/wait.you.component';
import { MainPageWisdomWawe } from './wisdom.wave/wisdom.wave.component';


@Component({
  selector: 'main-page',
  standalone: true,
  imports: [CommonModule, 
    MainPageComments, 
    MainPageKeppLearn, 
    MainPageNewCours,
  MainPageOurTeacher,
MainPageRecomended, 
MainPageSubject,
MainPageTrends, 
MainPageUpCourses,
MainPageWaitCourses,
MainPageWaitYou,
MainPageWisdomWawe],
  templateUrl: './main.page.component.html',
  styleUrl: './main.page.component.scss'
})
export class MainPage 
{
 
}
