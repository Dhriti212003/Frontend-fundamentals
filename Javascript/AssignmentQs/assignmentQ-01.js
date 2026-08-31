// 1. 
let num = 35;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

// 2.
let userName = prompt("Enter your name : ");
let userAge = prompt("Enter your age : ");
alert(`${userName} is ${userAge} years old.`);

// 3.
let month="Quarter-4";
switch(month){
    case "Quarter-1":
        console.log("January, February, March");
        break;
    case "Quarter-2":
        console.log("April, May, June");
        break;
    case "Quarter-3":
        console.log("July, August, September");
        break;
    case "Quarter-4":
        console.log("October, November, December");
        break;
    default:
        console.log("Does not exist.");
}

// 4. 
let goldenString = "Antartica";
if( ( (goldenString[0]==='A') || (goldenString[0]==='a') ) && (goldenString.length>5)){
    console.log("It's a golden string");
}
else{
    console.log("It's not a golden string");
}

// 5. 
let x = 10;
let y = -6;
let z = 10;
if(x>y && x>z){
    console.log(`${x} is largest number`);
}
else if(y>x && y>z){
    console.log(`${y} is largest number`);
}
else if(z>x && z>y){
    console.log(`${z} is largest number`);
}
else{
    console.log("There is no largest no.");
}

// 6.
let num1 = 32;
let num2 = 47852;
if(num1 % 10 === num2 % 10){
    console.log("The last digit is the same for the 2 numbers.")
}
else{
    console.log("The last digit is not the same for the 2 numbers.")

}