const add = (a:number,b:number):number=>{
    return a+b;
}

const subtract = (a:number,b:number):number=>{
    return a-b
}

function divide(a:number,b:number):number{
    return a/b;
}

const multiply = function(a:number,b:number):number{
    return a*b;
}

const logger = (message:string):void=>{
    console.log(message);
}

const throwError = (message:string):void=>{
    if(!message){
        throw new Error(message)
    }
    
}

const forcast = {
    date: new Date(),
    weather:'sunny'
}

const logWeather = (forcast:{date:Date,weather:string}):void=>{
   console.table(forcast);
    
}

logWeather(forcast)