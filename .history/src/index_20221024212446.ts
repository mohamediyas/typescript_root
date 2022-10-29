// abstract

abstract class Department{
    constructor(protected name:string){

    }

    public getRating(){
        return Math.random() * 99999
    }


}


class ItDepartment extends Department{

}

class AdminDepartment extends Department{}

 



