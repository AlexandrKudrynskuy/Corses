import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { MainPageRecomended } from './main.page/recomended/recomended.component';
import { MainPageKeppLearn } from './main.page/keep.lern/keep.lern.component';
import { MainPageNewCours } from './main.page/new.course/new.course.component';
import { MainPageSubject } from './main.page/subject/subject.component';
import { MainPageOurTeacher } from './main.page/our.teacher/our.teacher.component';
import { MainPageTrends } from './main.page/trends/trends.component';
import { MainPageUpCourses } from './main.page/up.courses/up.courses.component';
import { MainPageWaitCourses } from './main.page/wait.courses/wait.courses.component';
import { MainPageWaitYou } from './main.page/wait.you/wait.you.component';
import { MainPageWisdomWawe } from './main.page/wisdom.wave/wisdom.wave.component';
import { MainPageComments } from './main.page/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,Header,Footer,MainPageRecomended, MainPageKeppLearn, MainPageNewCours, MainPageSubject,MainPageOurTeacher,MainPageTrends,MainPageUpCourses,MainPageWaitCourses,MainPageWaitYou,MainPageComments, MainPageWisdomWawe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Course';
}
