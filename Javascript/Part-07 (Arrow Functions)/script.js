// this keyword
const student = {
    name:"dhriti",
    age:22,
    eng:79,
    math:89,
    phy:92,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
}


 // try & catch
try{
    console.log(a);
} catch(err){
    console.log("caught error! : varible a is not defined")
    console.log(err);
}

// Arrow function 
const sum = (a,b)=>{
    console.log(a+b);
};
sum(2,3);
const cube = (n)=>{
    return n*n*n;
};
cube(2);
cube(5);

//Set Timeout
console.log('hi there!');
setTimeout(()=>{
    console.log("Apna College");
},4000);

setInterval(()=>{
    console.log("Dhriti");
},4000);

let id = setInterval(()=>{
    console.log("heyy");
},3000);
clearInterval(id);

//this with arrow function
const students = {
    name: "aman",
    marks : 96,
    props: this, // global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's score -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(()=> {
            console.log(this);//student
        },4000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this);//window
        },2000);
    }
};

