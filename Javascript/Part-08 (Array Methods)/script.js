// Array methods
// 1.  forEach
let arr = [1,9,3,4,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);


let student = [{
    name:"aman",
    marks:89,
},{
    name:"dhriti",
    marks:98,
},{
    name:"siya",
    marks:78,
}];

student.forEach((student)=>{
    console.log(`${student.name} scored ${student.marks}`);
});

// 2. Map
let num = [1,2,3,4,4];
let double =  num.map(function(el){
    console.log(el*2);
})

let gpa = student.map((el)=>{
    console.log(`${el.name} got GPA of ${el.marks/10}`);
})

// 3. Filter
let nums = [2,4,1,5,6,2,7,8,9];
let even =  nums.filter((num)=>(num%2==0));
console.log(even);

// 4. Every: if all value is applicable for the condition it will return true if not false
let checkAllEven = [1,2,3,4,5].every((el)=>(el%2==0));
console.log(checkAllEven);

let checkAllEven2 = [2,4].every((el)=>(el%2==0));
console.log(checkAllEven2);

// 5. Some: if some value is applicable for the condition it will return true and false when all r not applicable
let checkIfSomeAreEven = [1,2,3,4,5].some((el)=>(el%2==0));
console.log(checkIfSomeAreEven);

let checkIfSomeAreEven2 = [1,3,5].some((el)=>(el%2==0));
console.log(checkIfSomeAreEven2);

// Reduce: reduces the array to single value

let reduceMethod = [1,2,3,4].reduce((res,el)=> (res+el));
console.log(reduceMethod);

// PracticeQ
let numb = [2,3,4,5,63,4,7,8,1,2];
let result  = numb.reduce((max,el)=>{
    if(el>max){
        return el;
    } else{
        return max;
    }
});

let number = [10,2,5,20,50,30,35,76]
let checkMultipleOf10 = number.every((el)=>el%10==0);
console.log(checkMultipleOf10);

let min = number.reduce((res,el)=>{
    if(res>el){
        return el;
    } else{
        return res;
    }
})

//  Spread operator
console.log(Math.min(...numb));
console.log(...numb);

let chars = [..."hello"];
console.log(chars);

let data ={
    email:"ironman@gmail.com",
    password:"abcd",
}
let dataCopy = {...data, id:123};
console.log(dataCopy);

// Rest
function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us: ",args[i]);
    }
}

function minium(a,b,c,d)
{
    console.log(arguments);
}

function sumOfAll(...args){
    return args.reduce((sum,el)=>sum+el);
}

// Destructuring
let names = ["tony","bruce","steve","peter","ybgyu","cbhuysdbyu","nuncbd","dddd"];
let [winner, runnerup, secondrunnerup, ...others] = names;
console.log(winner);  // tony
console.log(runnerup); // bruce
console.log(secondrunnerup); // steve
console.log(others);   //  ['peter', 'ybgyu', 'cbhuysdbyu', 'nuncbd', 'dddd']

const students = { 
    name:"Karan",
    age:14,
    class:9,
    subject: ["hindi","eng","math","science"],
    username:"karan@123",
    password:"abcd",
};

let {username, password} = students;
console.log(username);


// Assignments

// 1.
let a = [1,2,3,4,5];
let avg = a.reduce((res,el)=>(res+(el*el)));
let average = avg/a.length;
console.log(average);

// 2.
let usingMap = a.map((el)=>el+5);
console.log(usingMap);

// 3.
let words = ["Apple","boy","cyan","KeY"];
let upperCase = words.map((el)=>el.toUpperCase());
console.log(upperCase);

// 4.
const doubleAndReturnArgs = (arrs,...args)=>[
    ...arrs,
    ...args.map((v)=>v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2], 10, 4);

// 5.
const mergeObjects = (obj1,obj2,obj3) => ({...obj1,...obj2,...obj3});
console.log(mergeObjects({a:1,b:2},{c:3,d:4},{e:5,f:6}));