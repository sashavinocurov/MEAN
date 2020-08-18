// 1

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// Create new var for string that would pass a number
var myStringnum: number;
myStringnum = 9;


//2

function sayHello(name: any){
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// Change string to any to allow any input to be valid.
console.log(sayHello(9));

//3

function fullName(firstName: string, lastName: string, middleName?: string ){
let fullName = `${firstName} ${middleName } ${lastName}`;
return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// Need to make middle name nullable with ?
console.log(fullName("Jimbo", "Jones"));

//4

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
        lastName: "Yang",
belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// In class property belt was missing s, so it couldn't pass an argument with missing property. 
console.log(graduate(jay));
 
 //5

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja('Shane', 'Shon');
 // Since we trying to create new variable we need to put New first and pass to arguments that was asked in function.
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return;
    //`Ready to whiteboard an algorithm, ${programmer.fullName}?,`
 }
 // Now this has problems:
 console.log(study(turing));
 

//6

var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: number) => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y: number => x * y;
// Nor is this working:
var math = (x: any, y: any) => let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];

