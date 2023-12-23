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
    new Subject(1,"Мистецтво","/assets/imgkudr/art.png"),
    new Subject(5,"Освіта та викладання","/assets/imgkudr/education.png"),
    new Subject(9,"Data Science","/assets/imgkudr/datascience.png"),

    new Subject(6,"Дизайн","/assets/imgkudr/design.png"),
    new Subject(2,"Здоровя та медицина","/assets/imgkudr/health.png"),
    new Subject(10,"Програмування","/assets/imgkudr/dev.png"),

    new Subject(3,"Бізнес","/assets/imgkudr/buisnes.png"),
    new Subject(7,"Гуманітарні науки","/assets/imgkudr/humscience.png"),
    new Subject(11,"Точні науки","/assets/imgkudr/sciences.png"),

    new Subject(4,"Компютерні науки","/assets/imgkudr/compscience.png"),
    new Subject(8,"Математичні науки","/assets/imgkudr/math.png"),
    new Subject(12,"Соціальні науки","/assets/imgkudr/social.png"),


  ];
}