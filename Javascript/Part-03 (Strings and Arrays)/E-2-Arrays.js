let students = ["Aman", "Diya","Nathan"];
students[0];  // Aman
students[0][0]; // 

// Array Methods
// 1. Push: add to end
// 2. Pop: delete from end & returns it
// 3. Unshift: add to start
// 4. Shift: delete from start and returns it

let cars = ["audi","BMW", "xuv","maruti"];
cars.push("toyota"); // ["audi","BMW", "xuv","maruti","toyota"]
cars.pop(); // 'toyota'
cars.unshift("ferrari"); // 5
cars.shift(); // 'ferrari'

// 5. indexOf

cars.indexOf('xuv'); // 2

// 6. includes

cars.includes('BMW'); // true

// 7. concate

let n1 = [10,20,30];
let n2 = [40,50,60];
console.log(n1.concat(n2));

// 8. reverse

console.log(n1.reverse());

// 9. slice 

n1.slice(1); // 20,30
n1.slice(2,3) // 20
n1.slice(-2); // 30,20

// 10. splice : removes/adds/replaces elements in place
// splice(start,deleteCount,item0....itemN)

let colors = ['r','y','b','o','p','w'];
console.log(colors.splice(4)); // ['p','w']
console.log(colors.splice(0,1)); // ['r'] // ['y','b','o']
console.log(colors.splice(0,1,'bl','gr')); // ['bl','gr','b','o']

// 11. sort

console.log(colors.sort());
console.log([4,2,5,6,3,22,1,1,5].sort());


// Array Reference : address in memory

let arr = ['a','b','c'];
let arrCopy = arr;
arr == arrCopy // true

// Nested Arrays or multi-dimensional arrays

let nums = [[1,2],[3,4],[1,3],[2,4]];
console.log(nums); 
// [Arrays[2],Arrays[2],Arrays[2],Arrays[2]]
// 0 : [1,2]
// 1 : [3,4]
// 2 : [1,3]
// 3 : [2,4]