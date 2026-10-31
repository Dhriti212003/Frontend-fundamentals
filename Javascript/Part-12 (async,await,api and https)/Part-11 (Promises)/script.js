

async function greet(){
    throw "weak connection";
    return "hello!";
}

greet()
.then((result)=>{
    console.log("Promise was successful");
    console.log("result was : ",result);
})
.catch((error)=>{
    console.log("Promise was rejected with error : ",error);
})

let demo = async()=>{
    return 5;
}
demo();

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            resolve(num);
        }, 1000);
    })
    
}

async function demo1(){
    await getNum();
    await getNum();
    await getNum();
}

h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve("color changed");
       },delay);
    })
    
    
}

async function demo2(){
    try{
        await changeColor("red",1000);
        await changeColor("yellow",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
    } catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a =5;
    console.log(a);
}

// json 
let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
let student = {
    name: "shradha",
    marks: 95,
};
JSON.stringify(student);

/*

  https status code
  200 - OK
  404 - Not found
  400 - Bad request
  500 - Internal Server Error

  Status code	 Category	     Meaning
    100–199	   Informational	 Request received; processing continues.
    200–299	   Successful	     Request was successfully processed.
    300–399	   Redirection	     Further action is needed, usually redirecting to another URL.
    400–499	   Client Error	     Problem with the request made by the client.
    500–599	   Server Error	     Server failed to fulfil a valid request.

*/


// Fetch

let url = "https://catfact.ninja/fact";

fetch(url)
.then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})
.catch((error)=>{
    console.log("Error - ",error);
});

let url1 = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url1);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

    } catch (e) {
        console.log("error - ", e);
    }

    console.log("bye");
}