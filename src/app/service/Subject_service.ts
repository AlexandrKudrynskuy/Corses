class SubjectClass {
    private _id: number = 0;
    private _name: string = '';
    private _path: string = '';
    private _teacher: string = "";
    private _price: number = 0;
    private _reating: number = 0;
    private _count_hours: number = 0;
    private _count_classes: number = 0;
  
   public constructor(id: number, name: string, path: string, teacher: string, price: number, reating: number, count_hours: number, count_classes: number) {
      this._id = id;
      this._name = name;
      this._path = path;
      this._teacher = teacher;
      this._price = price;
      this._reating = reating;
      this._count_hours = count_hours;
      this._count_classes = count_classes;
    }
  
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
      this._name = value;
    }
  
    public get path(): string {
      return this._path;
    }
    public set path(value: string) {
      this._path = value;
    }
  
    public get teacher(): string {
      return this._teacher;
    }
    public set teacher(value: string) {
      this._teacher = value;
    }
  
    public get price(): number {
      return this._price;
    }
    public set price(value: number) {
      this._price = value;
    }
    public get reating(): number {
      return this._reating;
    }
    public set reating(value: number) {
      this._reating = value;
    }
  
    public get count_hours(): number {
      return this._count_hours;
    }
    public set count_hours(value: number) {
      this._count_hours = value;
    }
  
    public get count_classes(): number {
      return this._count_classes;
    }
    public set count_classes(value: number) {
      this._count_classes = value;
    }
  }
export class Subject_service 
{    
    public InitTesrSubject(): SubjectClass[]
    {
        var arr=new Array<SubjectClass>;
        arr.push(new SubjectClass(1,"Теорія графічного дизанйу для початківців","/assets/mainpage/imgeducationalsubject/1.png","Ігор Бондаренко",0,3,10,30));
        arr.push(new SubjectClass(2,"Основи живопису, малюнку та композиції","/assets/mainpage/imgeducationalsubject/2.png","Григорій Перейма",2000,4.3,35,46));
        arr.push(new SubjectClass(3,"Основи кольорознавства","/assets/mainpage/imgeducationalsubject/3.png","Ігор Бондаренко",0,4.3,10,30));
        arr.push(new SubjectClass(4,"Теорія і практика творчгого мислення","/assets/mainpage/imgeducationalsubject/4.png","Галина Немирова",3500,4.7,20,50));
        arr.push(new SubjectClass(5,"Програма лідерства в команді","/assets/mainpage/imgeducationalsubject/5.png","Євгенія Калиновська",0,2.5,10,30));
        arr.push(new SubjectClass(6,"Нейромережа і візуалізація образів","/assets/mainpage/imgeducationalsubject/6.png","Олексій Паперний",2000,4.3,35,46));
        arr.push(new SubjectClass(7,"Навчальний курс SQL","/assets/mainpage/imgeducationalsubject/7.png","Ганна Важна",0,4.2,10,30));
        arr.push(new SubjectClass(8,"Теорія і практика емоційного мислення","/assets/mainpage/imgeducationalsubject/8.png","Галина Немирова",1500,4.7,20,50));
        arr.push(new SubjectClass(9,"UI/UX дизайн","/assets/mainpage/imgeducationalsubject/9.png","Віолета Бойко",0,4.5,40,56));
        arr.push(new SubjectClass(10,"Повний навчальний курс SQL","/assets/mainpage/imgeducationalsubject/10.png","Валентина Шпак",2000,4.3,15,36));
        arr.push(new SubjectClass(11,"Основи спілкування","/assets/mainpage/imgeducationalsubject/11.png","Ігор Бондаренк0",0,4.2,10,30));
        arr.push(new SubjectClass(12,"Художнє проектування колекції одягу","/assets/mainpage/imgeducationalsubject/12.png","Валентина Чепурна",2500,4.7,20,50));
        return arr;
    }
    public SplitArray(count:number, arr:SubjectClass[]){ 
      let temp= []; 
      for(let i=0;i<arr.length;) 
      { 
        let inner=[]; 
          for(let j=0; j<count;j++) 
          { 
            if(i<arr.length){
              inner.push(arr[i]); 
              i++; 
            }
          } 
          temp.push(inner) 
      }        
      return temp; 
  }

}