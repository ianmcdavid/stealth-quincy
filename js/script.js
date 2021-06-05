var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pet = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
pet.addEventListener("mouseover", function () {
  pet.innerText = "20K";
});
var toggle = document.querySelector("#toggle");
//console.log(toggle);
var ball = document.querySelector(".ball");
//console.log(ball);
var title = document.querySelector("h1");
//console.log(title);
var body = document.querySelector("body");
//console.log(body);
toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    title.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    title.innerText = "Party Quincy";
  }
});
