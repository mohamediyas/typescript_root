// abstract


type Holiday = {
    date:Date;
    reason:string
}[]


abstract class Department{


    protected abstract holidays:Holiday

    constructor(protected name:string){

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
    

    
    public getRating() {
        throw new Error("Method not implemented.");
    }

}

class AdminDepartment extends Department{
    
    protected holidays: Holiday =[];


    getRating() {
        throw new Error("Method not implemented.");
    }
}


const itDepartment:ItDepartment = new ItDepartment("IT Department");

 



