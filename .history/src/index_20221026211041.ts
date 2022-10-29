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



const personModel:PersonModalAddress = {
    name:'john',
    email:"john@gmail.com",
    age:21,
    phone:989898989,
    car:'maruthi',
    address:'notheasr'
}