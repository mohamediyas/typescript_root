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






























