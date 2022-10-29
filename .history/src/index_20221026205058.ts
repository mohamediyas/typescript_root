// abstract


type Holiday = {
    date:Date;
    reason:string
}[]


abstract class Department{


    protected abstract holidays:Holiday

    constructor( name:string){

    }


    public addHolidays(holidays:Holiday){

        if(Array.isArray(holidays)){
            
            for(const holiday of holidays ){
                this.holidays.push(holiday)

            }
        }


    }


    public printHoliday(){
        if(this.holidays.length == 0){
            return console.log("There is no holiday")
        }

        console.log("here is a list of holiday")

        this.holidays.forEach((holiday)=>{
              console.log(holiday.reason)
        })


    }



  abstract getRating():any


}


class ItDepartment extends Department{



    protected holidays: Holiday = [];


    constructor(){
        super("It department")
    }
    

    
    public getRating() {
        throw new Error("Method not implemented.");
    }

}

class AdminDepartment extends Department{
    
    protected holidays: Holiday =[];

    constructor(){
        super("Adin department")
    }


    getRating() {
        throw new Error("Method not implemented.");
    }
}


const itDepartment:ItDepartment = new ItDepartment();

 



