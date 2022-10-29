// access modifier


class Person2{
   
    constructor(private name:string,private age:number){
      
        if(age> 200 || age < 0){
            throw new Error("the age must be between 0- 200")
        }

    }

    public getName(){
        return this.name
    }

}
 


let persons:Person2 = new Person2("karan",32)



console.log(persons)






















