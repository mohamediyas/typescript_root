


function multiPlyTwo(number:unknown){
 
    if(typeof number === "number"){
        return number*2

    }else{
        return "Please provide valid number"
    }

}


console.log(multiPlyTwo(4))