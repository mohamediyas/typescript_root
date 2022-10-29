// need to polymorpic type


// concurate function -> function return function

function filter(array:any[],predicate:Function){

    let result =[];


    for(let i=0;i< array.length;i++){

        let item = array[i];

        if(predicate(item)){
            result.push(item)
        }

    }

    return result 

}






let numbers = [1,2,3,32,23,34,223,54,233]



function greaterThenSeven(item:number){


    return item > 7

}




console.log(filter(numbers,greaterThenSeven))










































