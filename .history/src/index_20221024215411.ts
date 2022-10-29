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

 



