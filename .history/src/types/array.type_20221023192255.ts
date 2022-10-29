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



const airplanes :airPlanes=[
    {
        flightNumber: "sg612",
        airplaneModel: "123222",
        dateOfDeparture: "01/09/1010",
        timeOfDeparture: "23.10",
        from: "jfd",
        to: "dca",
        seats:{
            "10A":"mark botham",
            "10b":"mark aron",  
        }
    },
    {
        flightNumber: "sg612",
        airplaneModel: "123222",
        dateOfDeparture: "01/09/1010",
        timeOfDeparture: "23.10",
        from: "jfd",
        to: "dca",
        seats:{
            "10A":"mark botham",
            "10b":"mark aron",  
        }
    }
]









