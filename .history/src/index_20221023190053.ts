// intersection type

type CatType ={
    name:string;
    purrs:boolean;
    color:string
}


type DogType = {
     name:string;
     barks:boolean;
     color:string
}

type HybridAnimal = CatType & DogType


const hybridAnimal:HybridAnimal ={
     name:'max',
     color: "white",
     barks:true,
     purrs:true
}






































