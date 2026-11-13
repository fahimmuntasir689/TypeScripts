let value : unknown 
if(typeof value === 'string'){
    console.log('It is a string')
}
console.log(typeof(value))


// let data: any = 'NoNum';
// console.log(data.toFixed()) 
function throwError(message: string): never {
  throw new Error(message);
}
// throwError('Bishal Vul')

const numbers : number[] = [10 , 20, 30 , 40]
console.log(numbers)
const names : string[] = ['abu' , 'bakar' , 'zafar']
console.log(typeof(names))
const songs : Array<string> = [
    'A' , 'B' , 'C'
]
console.log(typeof(songs))

type Address = {
    country : string ,
    city? : string
}
type Person = {
    name : string,
    address : Address
}

let person : Person = {
    name : 'SHIPLON',
    address : {
        country : 'Dubai'
    }
}
const data : [number , string , boolean ] = [ // Tuples
    8920 , 'FMRADIO' , false
]

type User = {
    name : string ,
    number : number,
    mail? :string
}

const users:Array<User>  =[
    {
        name : 'sagar',
        number : 1909080765,
    }
]

const digits : ReadonlyArray<number> = [1,2,3,4,9]
console.log(digits)

type Name = {
    name : string
}
type Number = {
    number : number
} 

type Intro = Name & Number
const intro : Intro = {
    name : 'JD KING',
    number : 123
}