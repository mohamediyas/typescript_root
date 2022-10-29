
// inheritense

class User{
    name:string;
    email:string;
    age:number

    constructor(name:string,email:string,age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }


}


class AdminUser extends User{



 isAdmin:boolean = true  

 usersReporting:number


 constructor(name:string,email:string,age:number,usersReporting:number){
     super(name,email,age);

     this.usersReporting = usersReporting



 }

  



}




const user1:User = new User("john","john@gmail.com",21)


const admin:AdminUser = new AdminUser("mark","mark@gmail.com",24,5)






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


































