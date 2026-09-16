// PracticeQ
// 1.
const sqrt = (n)=> n*n;
console.log(sqrt(4));

// 2.

let id = setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);

// AssignmentQs
// 1. 
const arrayAverage = (arr) => {
  let avg = 0;
  let n = arr.length;
  for(let i=0;i<n;i++){
      avg+=arr[i];
  }
  avg=avg/n;
  console.log(avg);
};
let arr = [1,9,3,6,7];
arrayAverage(arr);

// 2.
const even = (num)=>{
    if(num%2==0){
        console.log("Even");
    } else{
        console.log("Odd");
    }
    
};
even(6);


// 3. write the output
const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// output : 
// undefined

// 4. write the output
let length = 4;

function callback() {
    console.log(this.length);
}

const objects = {
    length: 5,
    method(callback) {
        callback();
    },
};

objects.method(callback, 1, 2);

// output :
// 0