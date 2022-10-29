// access modifier


class Person2{
   
    constructor(private name:string,private age:number){
      
    }

    public getName(){
        return this.name
    }

}
 


let persons:Person2 = new Person2("karan",32)



console.log(persons)






















