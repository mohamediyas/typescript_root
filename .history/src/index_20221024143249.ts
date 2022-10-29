
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

  



}




const user1:User = new User("john","john@gmail.com",21)


const admin:AdminUser = new AdminUser("mark","mark@gmail.com",24)


















