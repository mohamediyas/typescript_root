type Dog ={
    name:string;
    barks:boolean;
}

type Cat ={
    name:string;
    purrs:boolean
}

type DogAndCatUnion = Dog | Cat


let dog:DogAndCatUnion = {
    name:"Buddy",
    barks:true,
    purrs:false
}













