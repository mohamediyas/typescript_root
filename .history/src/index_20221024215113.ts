// abstract


type Holiday = {
    date:Date;
    reason:string
}[]


abstract class Department{


    protected abstract holidays:Holiday

   protected constructor(protected name:string){

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
        super(name:"It department")
    }
    

    
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


const itDepartment:ItDepartment = new ItDepartment();

 


