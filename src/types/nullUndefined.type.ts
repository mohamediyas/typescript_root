 
// null undefined


let user:string;


console.log(user) //undefined



let saveButton = document.querySelector(".save")

console.log(saveButton) // null



let loggedInUser:string;

const users =[
    {name:"obby",age:12},
    {name:"y",age:13},
]

const loggedInUserName = users.find((user:{name:string,age:number}) => user.name == loggedInUser)


console.log(loggedInUserName?.name)

let savedButton:HTMLElement | null = document.getElementById("save")!


























