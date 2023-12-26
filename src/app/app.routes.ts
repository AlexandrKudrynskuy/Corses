import { Routes } from '@angular/router';
import { PersonalCabinetMain } from './personal.cabinet/personal.cabinet.component';
import { MainPage } from './main.page/main.page.component';
import { FreeCoursesInfoComponent } from './courses.details/free.courses/courses.info.component';

export const routes: Routes = [
    {path:'', component: MainPage},
    { path: 'personal-cabinet-main', component: PersonalCabinetMain }, 
    { path: 'free-courses-info', component:FreeCoursesInfoComponent },  


];
