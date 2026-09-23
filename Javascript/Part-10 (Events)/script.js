// mouse events

let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText= randomColor;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");

});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
    
}

// keyboard event

let input = document.createElement("input")
document.querySelector("form").append(input);
input.addEventListener("keydown",function(){
    console.log("Key was pressed");
});


let form = document.querySelector("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    let  inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
    console.log("form submitted");
})