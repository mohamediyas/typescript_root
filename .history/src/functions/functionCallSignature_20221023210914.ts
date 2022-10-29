// custom parameter


enum ageUnit{
    Years1="years",
    month1="month"
}

type Persontype1={
    name:string;

    age:number;
    ageUnit:ageUnit;

    country:string
}

const personinfos1:Persontype ={
    name: "Scott",
    age: 30.5,
    ageUnit: ageUnit.Years,
    country: "india"
}


function convertAgeToMonth(person:Persontype):Persontype{

    person.age = person.age *12;

    person.ageUnit = ageUnit.month


    return person

}





console.log(convertAgeToMonth(personinfos))