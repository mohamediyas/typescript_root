// union  type primitive


type stringOrNumber = string|number

function addNumberOrString(a:stringOrNumber,b:stringOrNumber){


    if(typeof a === "number" && typeof b === "number"){
        return a+b;
    }else{
        return a.toString() + b.toString()
    }






}












