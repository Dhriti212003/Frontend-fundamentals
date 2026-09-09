// 1.
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

// 2.
let number = 287152;
let count = 0;
for(let i=0;i<number.toString().length;i++){
    count++;
}
console.log(count);

// 3.
let sum=0;
number = number.toString();
for(let i=0;i<number.length;i++){
    sum+=Number(number[i]);
}
console.log(sum);

// 4. 
let numbers = 5;
let factorial = 1;

for(let i = 1; i <= numbers; i++){
    factorial *= i;
}
console.log(factorial);

// 5.
let nums = [1,2,7,22,3,9,7,5,4];
let max = nums[0];
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max=nums[i];
    }
}
console.log(max);