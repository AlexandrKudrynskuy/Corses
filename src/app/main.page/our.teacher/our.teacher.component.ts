import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

class Teacher{ 
  private _id: number = 0; 
  private _name:string=''; 
  private _education:string=''; 
  private _photopath:string=''; 
   
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
  public get education(): string { 
    return this._education; 
  } 
  public set education(value: string) { 
    this._education= value; 
  } 
  public get photopath(): string { 
    return this._photopath; 
  } 
  public set photopath(value: string) { 
    this._photopath= value; 
  } 
  constructor(id:number, name:string,education:string, path:string  ) { 
      this._id=id; 
      this._name=name; 
      this._education=education;
      this._photopath=path; 
} 
}
@Component({
  selector: 'main-page-our-teacher',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NgbModule],
  templateUrl: './our.teacher.component.html',
  styleUrl: './our.teacher.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainPageOurTeacher {
  
  
  teacher_array=[ 
    new Teacher(1,"Марія Перната","Викладач англійської мови","/assets/mainpage/teachers/teacher1.png"), 
    new Teacher(2,"Олекса Остапчук","Викладач програмування","/assets/mainpage/teachers/teacher2.png"), 
    new Teacher(3,"Ганна Свічад","Викладач кольоровознавства","/assets/mainpage/teachers/teacher3.png"), 
 
   
 ]; 

}