console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));


let para = document.querySelector("p");
para.innerHTML="I'm spiderman";


let img = document.querySelector('img');
img.getAttribute('id');
img.setAttribute('id','spidermanimg');


let heading = document.querySelector('h1');
heading.style.color="purple";
heading.style.backgroundColor="cyan";

