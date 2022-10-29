type Dog ={
    name:string;
    barks:boolean;
    wags:boolean
}

type Cat ={
    name:string;
    purrs:boolean
}

type DogAndCatUnion = Dog | Cat


let dog:DogAndCatUnion = {
    name:"Buddy",
    // barks:true,
    purrs:false
}

let cat:DogAndCatUnion = {
    name:'pure',
    barks:false,
    purrs:true
}
















