//Arithmetic Operators

let x=10,y=3;

console.log("x+y", x+y)
console.log("x-y", x-y)
console.log("x*y", x*y)
console.log("x/y", x/y)
console.log("x%y", x%y)

//Assignment Operators

let z=5;
z+=3;
console.log("z+=3:",z)
z*=2;
console.log("z*=3:",z)
z-=4;
console.log("z-=3:",z)
z/=2;
console.log("z/=3:",z)
z%=2;
console.log("z%=3:",z)

//Comparision Operators

let a=10,b="18";

console.log("a==b:", a==b)
console.log("a!=b:", a!=b)
console.log("a===b:", a===b)
console.log("a!==b:", a!==b)
console.log("a<=b:", a<=b)
console.log("a>=b:", a>=b)

//Logical Operators

let age=20;

console.log(age>=20 && age<=40)
console.log(age<20 || age >20)
console.log(!(age<18))

//String Operators

let firstName="Neelam"
let lastName="Sirisha"
let fullName=firstName+" "+lastName;
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName},  Welcome to Dev Astra`;
console.log(correctName)

//Ternary Operators

let myAge=18;
if(myAge>=18){
    console.log("Eligible to Vote")
}else{
    console.log("You cannot Vote")
}
let result=myAge>=18 ? "Eligible to vote":"You cannot vote";
console.log(result)

//Increment and Decrement Operators

let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof Parameters
console.log(typeof count)
console.log(typeof "Neelam")
console.log(typeof 18)
