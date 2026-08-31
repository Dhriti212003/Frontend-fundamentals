//1. good string 
let string = "apple";
if((string[0]==='a') && (string.length>3)){
    console.log(`${string} is a good string`);
}
else{
    console.log(`${string} is not a good string`);
}

//2. guess the output
let num = 12;

if((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
    console.log("safe");
} else {
    console.log("unsafe");
}

//ouput : safe