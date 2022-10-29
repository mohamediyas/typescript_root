





const map=(array:unknown[],func:(item:unknown)=>unknown[])=>{

    // check if array

    if(array.length === 0){
        return array
    }


    let resultValues = [];



    for (let i = 0; i < array.length; i++) {
       
        resultValues[i] = func(array[i]);



        
    }


    return resultValues





}

