function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}
three();


h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        nextColorChange();
    },delay)
    
}

// callback nesting -> callback hell
setTimeout(changeColor("red"),1000,()=>{
    setTimeout(changeColor("blue"),2000,()=>{
        setTimeout(changeColor("yellow"),3000);
    });
});

//using Promises
h1 = document.querySelector("h1");
function changeColor(color,delay){
    new Promise((resolve,reject)=>{
       setTimeout(()=>{
        h1.style.color = color;
        nextColorChange();
       },delay);
    })
    
    
}


function saveToDB(data,success,failure){
    let internetSpeed  = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    } else{
        failure();
    }
}
saveToDB("apna collge",
        ()=>{
            console.log(`your data was saved : `);
            saveToDB("Hello",
                ()=>{
                    console.log(`your data2 was saved : `);
                    
                },
                ()=>{
                    console.log("weak connection. data not saved");

                }
            )
        },
        ()=>{
            console.log("weak connection. data not saved");
        }
);


// Promises: its a JS object
function saveToDB2(data,success,failure){
    return new Promise((success,failure)=>{
        let internetSpeed  = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            success();
        }
        else{
            failure();
        }
    })
}

saveToDB2("Madusa");

/* Methods of Promise: then() and catch().
   1} Here request is the promise
   2} .then() acts when promise is fulfilled
   3} .catch() acts when promise is rejected

*/
function saveToDB2(data,success,failure){
    return new Promise((resolve,reject)=>{
        let internetSpeed  = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success : data was saved")
        }
        else{
            reject("failure : weak connection")
        }
    })
}


saveToDB2("taylor")
    .then(()=>{
        console.log("promise was resolved");
    })
    .catch(()=>{
        console.log("promise was rejected");
    })

// Promise chaining
saveToDB2("taylor")
    .then((result)=>{
        console.log("data1 saved.promise was resolved");
        console.log(result);
        return saveToDB2("hello");
    })
    .then(()=>{
        console.log("data2 saved");
    })
    .catch((error)=>{
        console.log("promise was rejected",error);
    })
