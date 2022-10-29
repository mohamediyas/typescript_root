type Reservation1 = {
    departureDate:Date;

    returnDate?:Date;
    departingFrom:string;
    destination:string

}


type Reserve1 = { (
    departureDate:Date,
    departingFrom:string,
    destination:string

) : Reservation;
(
    departureDate:Date,

    returnDate:Date,
    departingFrom:string,
    destination:string

) : Reservation


}


const rec:Reserve1(
    departureDate:Date,
    returnDate:Date,
    departingFrom:string,
    destination:string):Reservation|never =>{

        
    
    
    }


    type Filter121 = {
        (
            array:number[],predicate:(item:number)=>boolean
        ):number[];
    
        (
            array:string[],predicate:(item:string)=>boolean
        ):string[];
    
        (
            array:object[],predicate:(item:object)=>boolean
        ):object[];
    
    
    }





