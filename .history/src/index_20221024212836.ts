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
    public getRating() {
        throw new Error("Method not implemented.");
    }

}

class AdminDepartment extends Department{
    getRating() {
        throw new Error("Method not implemented.");
    }
}

 



