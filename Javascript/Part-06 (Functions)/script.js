function hello(){
    console.log("Hello");
}
hello();

function printName(){
    console.log("Dhriti");
}
printName();


function print1to5(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age = 19;
    if(age>=18){
        console.log("can vote");
    }
    else{
        console.log("cannot vote"); 
    }
}
isAdult();

//Functions with arguments
function printUserDetails(name,age){
    console.log(`${name}'s age is ${age}`);
}
printUserDetails("Dhriti",22);
printUserDetails("Piya",26);
printUserDetails("Karan");

function sum(a,b){
    console.log(a+b);
}
sum(2,4);

// return keyword
function sum(a,b){
    return a+b;
}
sum(2,7);