
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

















