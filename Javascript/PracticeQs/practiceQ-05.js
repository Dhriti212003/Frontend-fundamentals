
// 1.
let msg = "help!";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// 2.
let Uname ="ApnaCollege";
console.log(Uname.slice(4,9));  // Colle
console.log(Uname.indexOf("na"));  // 2
console.log(Uname.replace("Apna","Our")); // OurCollege

// 3.
console.log(Uname.slice(4));
console.log(Uname.replace('l','t'));


//PracticeQ

// 1.
let months  = ['jan','feb','march','may'];
console.log(months.shift());
console.log(months.shift());
console.log(months);
console.log(months.unshift('july'));
console.log(months.unshift('june'));
console.log(months);

//PracticeQ

// 1. use splice to do the same

console.log(months.splice(0,2,'june','july'));
console.log(months);

let lang = ['C','#C','C++','javascript','html','java','python','sql'];
lang = lang.reverse();
console.log(lang);
console.log(lang.indexOf('javascript'));


//PracticeQ

// 1.

let game = [
    ['X',null,'O'],
    [null,'X',null],
    ['O',null,'X']
];

console.log(game);
console.log(game[0]);
game[0][1]='X';
console.log(game);


