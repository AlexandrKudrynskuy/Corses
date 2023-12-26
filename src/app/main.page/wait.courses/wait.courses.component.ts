import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

 class WaitingElem
 {
    private _id: number = 0;
    private _name:string='';
    private _info:string='';
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
  public get info():string{
    return this._info;
  }
  public set info(value:string)
  {this._info=value;}
 
  public get path(): string {
    return this._path;
  }
  public set path(value: string) {
    this._path= value;
  }
  

  constructor(id:number, name:string, path:string ,info:string) {
    this._id=id;
    this._name=name;
    this._path=path;
    this._info=info;
    }
 }
@Component({
  selector: 'main-page-wait-courses',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './wait.courses.component.html',
  styleUrl: './wait.courses.component.scss'
})
export class MainPageWaitCourses {
  wElem_array=[
  new WaitingElem(1,"Онлайн - заняття у твоєму особистому кабінеті","/assets/mainpage/iconshowlearning/icon1.png","Навчайся у  будь-який час,з будь-якої точки земної кулі"),
  new WaitingElem(2,"Інтерактивна система спілкування викладача з учнем","/assets/mainpage/iconshowlearning/icon2.png","Ми завжди на зв'зку із тобою"),
  new WaitingElem(3,"Домашні завдання після кожного заняття","/assets/mainpage/iconshowlearning/icon3.png","Ми тримаємо руку на пульсі і допомагаємо тобі досягти найкращих результатів"),
  new WaitingElem(4,"Особисті онлайн-консультації","/assets/mainpage/iconshowlearning/icon4.png","Залишилися питання?Ти завжди отримаєш відповіді на них"),
  ]
}
