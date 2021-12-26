const carMakers:string[] = ['ford','toyota','chevy']
const date:Date[] = [new Date(),new Date()]

const carsByMake:string[][] = [
    ['f150'],
    ['corolla'],
    ['camero']
];

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible vales


// Help with 'map'
carMakers.map((car:string):string=>{
    return car.toUpperCase();
})


//Flexible types
const importantDates:(Date|string)[] = [new Date()]
importantDates.push('20-10-2001')
importantDates.push(new Date())
//importantDates.push(100);
