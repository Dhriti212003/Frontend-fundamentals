let btn = document.querySelector("#button");

let url = "https://catfact.ninja/fact";

btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#fact");
    p.innerText = fact;
});


async function getFacts(){
    try{
        const config = {headers: {Accept:"application/json"}};
        const res = await axios.get(url, config);
        console.log(res);
        return res.data.fact;
    } catch(error){
        console.log("Error - ",error);
        return "No fact found";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#dogBtn");

btn2.addEventListener("click",async ()=>{
    let dogImageLink = await getDogImg(); 
    let img = document.querySelector("#dogImg");
    img.setAttribute("src",dogImageLink);
});


async function getDogImg(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e){
        console.log("Error - ",e);
        return "No image found";
    }
}

let url3 = "http://universities.hipolabs.com/search?name=";

let btn3 = document.querySelector("#colBtn");

btn3.addEventListener("click", async()=>{
    
    let country =document.querySelector("input").value;
    let colDetails = await getColleges(country);
    console.log(colDetails);

    show(colDetails);
});

function show(colDetails){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(let col of colDetails){
        
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}




async function getColleges(country){
    try{
        let res= await axios.get(url3 + country);
        return res.data;
    } catch(e){
        console.log("error - ",e);
        return [];
    }
}
