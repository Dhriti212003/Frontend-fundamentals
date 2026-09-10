// JS object literals : stores keyed collections
const student = {
    name: "Shradha",
    age: 23,
    marks: 94.5,
    city: "Bangalore",
};

console.log(student);
console.log(student["name"]);
console.log(student.city);

// Add / update value
student.city = "Mumbai";
console.log(student);

student.gender = "female";
console.log(student);

//delete
delete student.marks;
console.log(student);

const item = {
    price: 100.89,
    discount :50,
    colors: ["red","pink"], 
};


// Thread / Twitter Post

const post = {
    username : "@dhriti21",
    content : "This is my #firstPost",
    likes:150,
    reposts : 5,
    tags: ["@apnacollege","@sigma"]
};

//Object of Objects
const classInfo = {
    aman :{
        grade:"A+",
        city:"Delhi",
    },
    shraddha :{
        grade:"B+",
        city:"Mumbai",
    },
    dhriti :{
        grade:"O",
        city:"Bangalore",
    },
};

console.log(classInfo.aman);
console.log(classInfo.aman.city);
console.log(classInfo.dhriti.grade);
console.log(classInfo.shraddha.grade);

//Array of Objects
const classInform = [
     {
        name:"anu",
        grade:"A+",
        city:"Delhi",
    },
    {
        name:"ridhamma",
        grade:"B+",
        city:"Mumbai",
    },
    {
        name:"Piya",
        grade:"O",
        city:"Bangalore",
    },
];


// Math Objects
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-2));
console.log(Math.floor(4.66666));
console.log(Math.ceil(4.6677));
console.log(Math.random());

//
let num = Math.random();
num=num*10;
num=Math.floor(num);
num=num+1;
console.log(num);

// Guessing game
let max = prompt("enter the maximum number : ");
console.log(max);

const random = Math.floor(Math.random()*max)+1;
let guess = prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("congrats! the guess number is ",guess);
        break;
    }
    else if(guess<random){
        guess = prompt("your prompt was too small");
    }
    else if(guess>random){
        guess = prompt("your prompt was too large");
    }
}

//
console.log((Math.floor(Math.random()*100))+1);
console.log((Math.floor(Math.random()*5))+1);


