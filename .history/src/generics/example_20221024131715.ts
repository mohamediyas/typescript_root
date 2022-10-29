





const map=<T,U>(array:T[],func:(item:T)=>U)=>{

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



let numbersInt = [3,2,3,2,4];


const converted = map(numbersInt,(number)=>number.toString())

console.log(converted)






