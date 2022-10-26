export interface Group {
  id:number|null;
  name:string;
  course_id:number;
  lecturer_id:number;
  start:number;
  end:number;

  course:{
    id:number
    name:string
  }
  lecturer:{
    id:number,
    name:string,
    surname:string
  }


}
