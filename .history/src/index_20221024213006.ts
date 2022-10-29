// abstract


type Holiday = {
    date:Date;
    reason:string
}[]


abstract class Department{


    protected abstract holidays:Holiday

    constructor(protected name:string){

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

 



