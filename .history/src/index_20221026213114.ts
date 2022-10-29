


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















































