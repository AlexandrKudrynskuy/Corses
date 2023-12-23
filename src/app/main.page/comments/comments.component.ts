import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

class UserComents{ 
  private _id: number = 0; 
  private _name:string=''; 
  private _comment:string=''; 
  private _photopath:string=''; 
  private _rating:number =0;
  private _date:string ="";
   
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
  public get comment(): string { 
    return this._comment; 
  } 
  public set comment(value: string) { 
    this._comment= value; 
  } 
  public get rating(): number { 
    return this._rating; 
  } 
  public set rating(value: number) { 
    this._rating= value; 
  } 
  public get photopath(): string { 
    return this._photopath; 
  } 
  public set photopath(value: string) { 
    this._photopath= value; 
  } 
  public get date(): string { 
    return this._date; 
  } 
  public set date(value: string) { 
    this._date= value; 
  } 
  constructor(id:number, name:string,comment:string, path:string , date:string, rating:number ) { 
      this._id=id; 
      this._name=name; 
      this._comment=comment;
      this._photopath=path; 
      this._date=date;
      this._rating=rating;
} 
}
@Component({
  selector: 'main-page-comments',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NgbModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class MainPageComments {
  
  
  comments_array=[ 
    new UserComents(1,"Михайло М","Для мене цей сайт це - знахідка. Я вже маю вищу освіту, але завжди прагнув оволодіти навичками, які допоможуть мені розширити горизонти моєї свідомості. Саме на цьому сайті я знайшов…","/assets/users/user2.png","20 січня 2022",5), 
    new UserComents(2,"Богдан Щедрий","Мені необхідно будо швидко підготуватися до складання іспитів для мого нового працевлаштування. Дякувати вам мені це вдалося. Я маю нову престижну роботу.","/assets/users/user3.png","20 лютого 2022",4), 
    new UserComents(3,"Марія Литовченко","Ще у дитинстві я мріяла навчитися малювати так, як малюють справжні художники. Але я мешкала в маленькому місті, в якому не було художньої школи. Так і залишилась моя мрія мрією допоки я …","/assets/users/user1.png","20 січня 2022",5), 
    new UserComents(4,"Олег Вишня","Це чудовий новий сайт. В ньому багато таких цікавих курсів. Думаю, що буду з вами довгий час.","/assets/users/user4.png","20 лютого 2022",4), 
   
 ]; 

}