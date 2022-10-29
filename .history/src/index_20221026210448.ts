interface PersonModal{
  
    name:string;
    email:string;
    age:number;
    phone?:number;
    greet?:()=>void
    
}





const personModel:PersonModal = {
    name:'john',
    email:"john@gmail.com",
    age:21
}