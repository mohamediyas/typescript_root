type Reservation1 = {
    departureDate:Date;

    returnDate?:Date;
    departingFrom:string;
    destination:string

}


type Reserve1 = { (
    departureDate:Date,

    returnDate:Date,
    departingFrom:string,
    destination:string

) : Reservation  }