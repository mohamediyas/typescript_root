


enum AutomobileType{
    car="car",
    bus='bus'
}


enum AutomobileColor{
    red="red",
    blue='blue'
}

enum AutomobileBrand{
    toshi="toshi",
    bus='bus'
}


interface Automob<Type,Brand,Colors>{
    type:Type;
    brand:Brand;
    colors:Colors[];
    description:string
}


const ferrar:Automob<AutomobileType,AutomobileBrand,AutomobileColor>={
    type: AutomobileType.car,
    brand: AutomobileBrand.toshi,
    colors: [AutomobileColor.blue],
    description: "This is ferrari"
}














































