import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PersonalCabinetMain } from './personal.cabinet/personal.cabinet.component';
const appRoutes: Routes =[
  // { path: "personal-cabinet-main", component: PersonalCabinetMain},
  { path: '', redirectTo: '/personal-cabinet-main', pathMatch: 'full' },   
  { path: 'personal-cabinet-main', component: PersonalCabinetMain },  
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
