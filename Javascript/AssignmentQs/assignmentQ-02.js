//  AssignmentQs

// 1. get 1st n elements of an array
let nums = [7,3,0,-1,4,-6];
let n = 4;
console.log(nums.slice(0,n));

// 2. get last n elements of an array

console.log(nums.slice(nums.length-n));

// 3.

let str = "  vyt buyg ";
if(str== " "){
    console.log("Blank");  
}
else{
    console.log("Not blank");
}

// or 

// let str = "  vyt buyg ";
// if(str.length==0){
//     console.log("Blank");  
// }
// else{
//     console.log("Not blank");
// }

//  4.
let test = "ILoveMyDogs";
let index = 5;
if(test[index]==test[index].toLowerCase()){
    console.log(true);
}
else{
    console.log(false);
}

// 5.

let msg ="  Greetings     ";
console.log(msg.trim());

// 6.

let arr = [0,1,3,4,7,3,9];
let num = 5;
if(arr.indexOf(num)!=-1){
    console.log(true);
}
else{
    console.log(false);
}