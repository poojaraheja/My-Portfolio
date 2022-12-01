let menuBtn = document.getElementById("menu-btn");
let menuBar = document.getElementById("menu-bar");
let cancleBtn = document.getElementById("cancle-btn");

menuBtn.addEventListener("click", () => {
    menuBar.classList.toggle("active");
});

cancleBtn.addEventListener("click", () => {
    menuBar.classList.toggle("active");
});

const hideIt = () => {
    menuBar.classList.toggle("active");
};