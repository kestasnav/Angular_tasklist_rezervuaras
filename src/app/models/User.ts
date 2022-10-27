export interface User{
  access_token:string,
  token_type:string,
  expires_in:number,
  user:{
    id:number,
    name:string,
    surname:string,
    email:string,
    age:number,
    type:string,
    phone:number,
    created_at:number,
  }
}
