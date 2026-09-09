
/*
1. Template Literals:
    Template literals are a modern way to create strings in JavaScript using backticks ( ` ) instead of single or double quotes.
     - Why Use Them: They eliminate messy string concatenation (+) and backslash escaping (\n), making your code much cleaner, shorter, and easier to read.
     - Main Uses : 
         a) Variables in Strings: Insert any variable or expression directly using ${variable}.
         b) Multi-line Text: Press Enter to start a new line without needing \n.
         c) Quotes Inside Text: Use ' or " freely inside the string without breaking the code.
*/

let pencilPrice = 10;
let erasorPrice =5;
console.log("The total price is : ",(pencilPrice + erasorPrice)+"Rupees." );
console.log(`The pencil price is : ${pencilPrice} Rupees`);
console.log(`The total price is : ${pencilPrice + erasorPrice} Rupees`);

/*
2. Operations:
Operators in JS
- Arithmetic (+, -, *, /, %, **)
- Unary (++, --)
- Assignment (=, +=, -=, *=, /=, %= etc.)
- Comparison
- Logical
*/
let a = 40;
let b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(b++);
console.log(a--);
console.log(b--);
console.log(++a);
console.log(++b);
console.log(--a);
console.log(--b);

console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

// comparsion for non-numbers
console.log('a'>'A');
console.log('a'>'b');
console.log('b'<'c');
console.log('B'<'C');
console.log('*'<'&');

//logical operators
let x=10;
let y=10;
if((x!=0) && y>9){
    console.log(true);
}
else if((x!=0) || y==9){
    console.log(False);
}

/*

3. Conditional Statements: 
    - if-else
    - nested if-else
    - switch
*/

// if statement
console.log("before my if statement");
let age = 20;
if(age>=18){
    console.log("You can vote!");
}
if(age<18){
    console.log("You cannot vote!");
}
console.log("after my if statement");

//if-else statement
console.log("before my if-else statement");
let ageVoting = 15;
if(ageVoting>=18){
    console.log("You can vote!");
}
else if(ageVoting<18){
    console.log("You cannot vote!");
}
else{
    console.log("Age cannot be negative!");
}
console.log("after my if-else statement");

// nested if-else
let marks = 46;
if(marks>=35){
    console.log("Pass");
    if(marks>=90){
        console.log("Grade : O");
    }
    else if(marks>=80){
        console.log("Grade : A+");
    }
    else if(marks>=70){
        console.log("Grade : A-");
    }
    else if(marks>=60){
        console.log("Grade : B+");
    }
    else if(marks>=50){
        console.log("Grade : B-");
    }
    else if(marks>=30){
        console.log("Grade : C+");
    }
    else{
        console.log("Grade : C-");
    }
}
else{
    console.log("Fail");
}

// switch statement
let color = "yellow";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Broken Light");
}


/* 
4. Alerts and Prompts
   - Alert is used to display a alert message
   - Prompt is a dialog box that takes user input
*/

alert("something is wrong!");
console.log("this is a simple log");
console.error("this is a error message");
console.warn("this is a warning message");

let fullName = prompt("Enter yoy name : ");
console.log(fullName);

