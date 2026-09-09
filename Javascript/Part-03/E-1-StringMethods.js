// String methods 

// 1.trim : removes white space from both ends of a string and returns a new one

let msg= "   Hello    ";
msg.trim();
console.log(msg);


// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);

let name = "Oreo";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// 2. indexOf

let str = "IloveCoding";
console.log(str.indexOf("love"));
console.log(str.indexOf("J"));
console.log(str.indexOf("o"));

// 3. Method chaining

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// 4. slice : returns a part of the original string as a new string

console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.slice(-1));


// 5. replace
console.log(str.replace("love","do"));

// 6. returns a string with the number of copies of a string
console.log(str.repeat(3));