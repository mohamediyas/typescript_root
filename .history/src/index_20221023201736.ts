// void never

const addNumbers=():void=>{
    console.log(2+4)
}


addNumbers();



const throwNewError=():never=>{
     throw new Error("your program is terminate")
}


throwNewError()











