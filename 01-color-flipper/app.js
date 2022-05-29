const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () =>{
    // get the random number between 0 - 2 ;
    const randomNumber = Math.floor(Math.random() * colors.length);
    // change the body background color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
