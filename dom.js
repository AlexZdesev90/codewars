const button = document.createElement("button");
button.classList.add("hot");
button.innerHTML = "click";
document.body.append(button);

function changeBackground(){
    document.body.style.backgroundColor = ( document.body.style.backgroundColor === "black") ? "white" : "black";
}

button.addEventListener("click", changeBackground);


const wrapper = document.createElement("div");
document.body.append(wrapper);

const inpt = document.createElement("input");
inpt.classList.add("input");
inpt.placeholder = "...search";
wrapper.classList.add("wrap")
wrapper.append(inpt);

const ul = document.createElement("ul");
document.body.append(ul);
const button2 = document.createElement("button");
button2.innerHTML = "ok";
button2.classList.add("ok");
wrapper.append(button2);

function add(e){
    const value = inpt.value;
    const li = document.createElement("li");
    li.innerHTML = value;
    ul.append(li);
    inpt.value = "";
    // console.log(e.eventPhase)
    console.log(e.type)
}

button2.addEventListener("click", add)

// const arr = [ 12, 34, 54, 12];
// function f(rr){
//     return rr.reduce((a,c) => {
//         if(a[c]) {
//             a[c]++
//         } 
//         else {
//             a[c] = 1
//         }
//         return a
//     }, {})
// }

// console.log(f(arr))

function handler(e) {
    console.log(e.button);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.screenX);
    console.log(e.screenY);
    e.stopPropagation()

}

document.querySelector(".circle").addEventListener("click", handler);
const container = document.querySelector(".container");

function bright(elem) {
    elem.style.backgroundColor = elem.style.backgroundColor === "red" ? "black" : "red";
}

function hand(e) {
    let current = e.target.closest("div");
    if(!current) return;
    bright(current)
    console.log(current.innerHTML)
}

container.addEventListener("click", hand)
