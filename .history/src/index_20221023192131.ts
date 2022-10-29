// array

let a:number[] = [12,23,4]


let b:string[] = ["arun" ,"karan"]

let d:Array<string> = ["name","place"]

let c:(number|string)[] = [1,2,"name"]

type AirPlane1 = {
    flightNumber:string;
    airplaneModel:string;
    dateOfDeparture:string;
    timeOfDeparture:string;
    from:string;
    to:string;
    seats:{
        [key:string]:string
    }
}

type airPlanes = AirPlane1[]



const airplanes :airPlanes=[]









