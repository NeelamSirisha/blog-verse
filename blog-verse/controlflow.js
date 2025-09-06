let marks =36;

if(marks >=80){
    console.log("A Grade");
}
else if(marks >=60){
    console.log("B Grade");
}
else if(marks >=45){
    console.log("C Grade");
}
else if(marks >=30){
    console.log("F Grade");
}

let day=5
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;
}

let n = 10;
console.log("For-Loop:")
for(let i=0; i<=n; i++){
    console.log(i);
}

let j=0;
console.log("While-Loop:")
while(j <=n){
    console.log(j);
    j++;
}

let i=0;
console.log("Do-While:")
do{
    console.log(i);
    i++;
}while(i != n);

let colors=["Red","Blue","Green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors){
    console.log(color)
}


//Objects

let person={
    name: "Sirisha",
    age: "20",
    college: "JNTU-GV"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i==2){
        break;
    }
    console.log(i)
}