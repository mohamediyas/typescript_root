// need to polymorpic type


function filter(array:any[],predicate:Function){

    let result =[];


    for(let i=0;i< array.length;i++){

        let item = array[1];

        if(predicate(item)){
            result.push(item)
        }

    }

    return result 

}




let numbers = [32,23,34,223,54,233]




































