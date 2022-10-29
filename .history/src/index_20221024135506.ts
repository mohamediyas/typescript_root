
class Person1{
    name:string;
    email:string;

    constructor(name:string,email:string){
            this.name = name;
            this.email = email;
    }

    greet ():void {
        console.log(`Hello ${this.name}`);
    }
}

const emp = new Person1("kamil","kamil@gmail.com")

emp.greet()



// let person = {
//     name:"john",
//     email:"john@gmail.com",
//     greet:()=>console.log(`Hello ${person.name}`)
// }











