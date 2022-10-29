// enums
// import * as roles from './roles'

enum Roles{
    admin =0,
    author = 1,
    editor = 2
}


type Person = {
    name:string;
    email:string;
    password:string;
    role:Roles
}



const person1:Person ={
    name: "john",
    email: "john@gmail.com",
    password: "87878787",
    role: Roles.admin
}






























