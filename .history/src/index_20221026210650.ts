interface PersonModal{
  
    name:string;
    email:string;
    age:number;
    phone?:number;
    greet?:()=>void
    
}


interface PersonModalAddress{
  
    name:string;
    email:string;
    age:number;
    phone?:number;
    address:string;
    
}



const personModel:PersonModal = {
    name:'john',
    email:"john@gmail.com",
    age:21
}