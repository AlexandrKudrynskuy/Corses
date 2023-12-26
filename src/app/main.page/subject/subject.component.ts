import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
 class Subject{
  private _id: number = 0;
  private _name:string='';
  private _path:string='';
  
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name= value;
  }
  public get path(): string {
    return this._path;
  }
  public set path(value: string) {
    this._path= value;
  }
  
  
  

  constructor(id:number, name:string, path:string ) {
  this._id=id;
  this._name=name;
  this._path=path;
  
  }

  
}

@Component({
  selector: 'main-page-subject',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class MainPageSubject {
  subject_array=[
    new Subject(1,"Мистецтво","/assets/mainpage/subject/art.png"),
    new Subject(5,"Освіта та викладання","/assets/mainpage/subject/education.png"),
    new Subject(9,"Data Science","/assets/mainpage/subject/datascience.png"),

    new Subject(6,"Дизайн","/assets/mainpage/subject/design.png"),
    new Subject(2,"Здоровя та медицина","/assets/mainpage/subject/health.png"),
    new Subject(10,"Програмування","/assets/mainpage/subject/dev.png"),

    new Subject(3,"Бізнес","/assets/mainpage/subject/buisnes.png"),
    new Subject(7,"Гуманітарні науки","/assets/mainpage/subject/humscience.png"),
    new Subject(11,"Точні науки","/assets/mainpage/subject/sciences.png"),

    new Subject(4,"Компютерні науки","/assets/mainpage/subject/compscience.png"),
    new Subject(8,"Математичні науки","/assets/mainpage/subject/math.png"),
    new Subject(12,"Соціальні науки","/assets/mainpage/subject/social.png"),


  ];
}