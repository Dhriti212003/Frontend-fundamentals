// Loops

// for loop
for(let i=0;i<=6;i++){
    console.log(i);
}

// odd numbers
for(let i=1;i<=15;i=i+2){
    console.log(i);
}

// even numbers
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

// multiplication of 5
for(let i=1;i<=10;i++){
    console.log(`${5}*${i}=${i*5}`)
}

//or
for(let i=5;i<=50;i=i+5){
    console.log(i);
}

let n = prompt("write your number");
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

//Nested for loop
for(let i=1;i<=5;i=i+2){
    for(let j=0;j<=3;j++){
        console.log(i);
    }
}

// while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let favMovie = "Coco";
let guess = prompt("guess the movie : ");
while((guess!=favMovie) && (guess!='quit')){
    console.log("wrong");
    guess = prompt("wrong guess! please try again : ");
}
if(guess==favMovie){
    console.log("Congrats!!");
}
else{
    console.log("You quit");
}


//break

// let favMovie = "Coco";
// let guess = prompt("guess the movie : ");
// while((guess!=favMovie) && (guess!='quit')){
//     if(guess=='quit'){
//     console.log("You quit");
//     break;
//     }
//     guess = prompt("wrong guess! please try again : ");
// }
// if(guess==favMovie){
//     console.log("Congrats!!");
// }

// Loops with Array

let months = ['jan','feb','march','April','May'];
for(let i=0;i<months.length;i++){
    console.log(i,months[i]);
}

let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
];
for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i]);
    for(let j=0;j<=heroes.length;j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

//for-of loop

for(month of months){
    console.log(month);
}
for(char of "Learning"){
    console.log(char);
}

//Nested for-of loop 

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}