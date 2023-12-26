import { Component } from '@angular/core';
import { FreeCoursesTrendsComponent } from '../trends/trends.component';

@Component({
  selector: 'free-courses-info',
  standalone: true,
  imports: [FreeCoursesTrendsComponent],
  templateUrl: './courses.info.component.html',
  styleUrl: './courses.info.component.scss'
})
export class FreeCoursesInfoComponent {
header="Безкоштовні курси";
discription="Безплатні навчальні курси на нашому сайті - це унікальна можливість для вас навчатися без фінансових"
           +"витрат. Ці курси охоплюють різні галузі знань, пропонують для вивчення ті предмети, інформація яких дозволять"
           +" вам у зручному режимі розширити свої знання та покращити свої професійні навички. Вони роблять освіту більш"+
           "доступною та досяжною для всіх бажаючих навчатися чомусь новому";
countTeachers="345 викладачів";
countStudents="796247 учнів";


}
