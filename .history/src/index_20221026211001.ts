interface PersonModal{
  
    name:string;
    email:string;
    age:number;
    phone?:number;
    greet?:()=>void
    
}


interface PersonCar{
    car:string
}


interface PersonModalAddress extends PersonModal,PersonCar{
    address:string;
    
}



const personModel:PersonModal = {
    name:'john',
    email:"john@gmail.com",
    age:21
}