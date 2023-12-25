import { Routes } from '@angular/router';
import { PersonalCabinetMain } from './personal.cabinet/personal.cabinet.component';
import { MainPage } from './main.page/main.page.component';

export const routes: Routes = [
    {path:'', component: MainPage},
    // { path: 'main-page', component: MainPage},  
    { path: 'personal-cabinet-main', component: PersonalCabinetMain },  
];
