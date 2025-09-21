let person = {
    name: "Sirisha",
    age: 20,
    skills: ["JavaScript", "React", "Node.js"]
};

const{name, age} = person;
console.log(name)
console.log(age)

let fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits[0])

let numbers=[1,2,3,4,5]
let squares=numbers.map((num)=>num*num); //Transform each other
console.log(squares);

let evens=numbers.filter((num)=>num%2==0) //Filter values based on the condition
console.log(evens);

let sum=numbers.reduce((present,num)=>present+num, 0); //Accumilate values
console.log(sum)

//Array of Objects

let students = ["name: 'Sirisha', marks: 90", "name: 'Jasmika', marks: 95", "name: 'Kavya', marks:96"];

let i = 0;
for(object of students){
    i++;
    console.log("object ", i, ":", object)
}

let highestMarks = 0;
for (let object of students) {
    if (object.marks > highestMarks) {
        highestMarks = object.marks;
    }
}
console.log("Highest Marks:", highestMarks);
