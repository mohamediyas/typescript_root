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





































