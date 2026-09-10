// 1.

function printPoem(){
    console.log("Twinkle Twinnkle, Little star");
    console.log("How I wounder what you are?");
}
printPoem();

// 2.

function dice(){
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
}
dice();
dice();
dice();

// 3.
function averageOfNumber(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
averageOfNumber(3,5,7);

// 4.
function multiplicationTable(n){
    for(let i=n;i<=n*10;i=i+n){
        console.log(`${i}`);
    }
}
multiplicationTable(7);

// 5.
function sum(n){
    let sum =0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sum(3));

// 6.
let str = ["hi","hello","bye","!"];
function concat(str){
    let result= "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));