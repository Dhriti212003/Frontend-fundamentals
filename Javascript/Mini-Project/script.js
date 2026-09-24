// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopImmediatePropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopImmediatePropagation();
//         console.log("li was clicked");
//     });
// }

let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

input.addEventListener("keydown",function(event){
    console.log(input.value);
})

btn.addEventListener("click", function() {
    let li = document.createElement("li");

    let text = document.createTextNode(input.value);

    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.classList.add("delete");

    delButton.addEventListener("click",function(){
        let par = this.parentElement;
        par.remove();
    })
    li.appendChild(text);
    li.appendChild(delButton);

    list.appendChild(li);

    input.value = "";
});

