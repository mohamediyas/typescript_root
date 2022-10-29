// custom parameter


enum ageUnit{
    Years="years",
    month="month"
}

type Persontype={
    name:string;

    age:number;
    ageUnit:ageUnit;

    country:string
}

const personinfos:Persontype ={
    name: "Scott",
    age: 30.5,
    ageUnit: ageUnit.Years,
    country: "india"
}
