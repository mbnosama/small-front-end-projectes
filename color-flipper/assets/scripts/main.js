const btn = document.getElementById("btn");
let color = document.querySelector(".color");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
    let ranColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = ranColor;
    nav.style.borderLeftColor = ranColor;
    color.innerHTML = ranColor;
});
