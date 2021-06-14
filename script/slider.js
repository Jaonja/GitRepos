let count = 0;
let itemWidth;
const slider = document.querySelectorAll(".gazel-inform-box");
const sliderWidth = document.querySelector(".sliderWidth");


const sliderMob = document.querySelectorAll(".mobil-gazel-box");
const sliderWidthMob = document.querySelector(".sliderWidthMob");


function initMob() {
  itemWidth = document.querySelector(".sliderMob ").offsetWidth;
  sliderWidthMob.style.width = itemWidth * sliderMob.length + "px";
  sliderMob.forEach((item) => {
    item.style.width = itemWidth + "px";
    item.style.height = "auto";
  });
  rollSliderMob();
}

window.addEventListener("resize", initMob);
function rollSliderMob() {
  sliderWidthMob.style.transform = "translate(-" + count * itemWidth + "px)";
}


let firstBall = document.querySelector('#prevSlideOne')
firstBall.addEventListener("click", function(){
  count =0
  rollSliderMob()
})
let twoBall = document.querySelector('#nextSliderTwo')
twoBall.addEventListener("click", function(){
  count =1
  rollSliderMob()
})
let threetBall = document.querySelector('#nextSliderThree')
threetBall.addEventListener("click", function(){
  count =2
  rollSliderMob()
})





function init() {
  itemWidth = document.querySelector(".slider ").offsetWidth;
  sliderWidth.style.width = itemWidth * slider.length + "px";
  slider.forEach((item) => {
    item.style.width = itemWidth + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
init();
window.addEventListener("resize", init);

document.querySelector(".nextButton").addEventListener("click", function () {
  count++;
  if (count >= slider.length) {
    count = 0;
  }
  if (count === 0){
    gazel.classList.add("color");
    heel.classList.remove("color");
    truck.classList.remove("color");
  }
  if (count === 1){
  heel.classList.add("color");
  gazel.classList.remove("color");
  truck.classList.remove("color");
  }
  if (count ===2){
  truck.classList.add("color");
  heel.classList.remove("color");
  gazel.classList.remove("color");
  }
  rollSlider();
  console.log (count)
});

document.querySelector(".prevButton").addEventListener("click", function () {
  count--;
  if (count < 0 ) {
    count = slider.length - 1;
  }
  if (count === 0){
    gazel.classList.add("color");
    heel.classList.remove("color");
    truck.classList.remove("color");
  }
  if (count === 1){
  heel.classList.add("color");
  gazel.classList.remove("color");
  truck.classList.remove("color");
  }
  if (count ===2){
  truck.classList.add("color");
  heel.classList.remove("color");
  gazel.classList.remove("color");
  }
  rollSlider();
});

function rollSlider() {
  sliderWidth.style.transform = "translate(-" + count * itemWidth + "px)";
}

console.log (count)
let gazel = document.querySelector(".gazel");
gazel.addEventListener("click", function () {
  count = 0
  rollSlider();
  rollSliderMob();
  this.classList.add("color");
  heel.classList.remove("color");
  truck.classList.remove("color");
});
let heel = document.querySelector(".heel");
heel.addEventListener("click", function () {
  count = 1
  rollSlider();
  rollSliderMob();
  this.classList.add("color");
  gazel.classList.remove("color");
  truck.classList.remove("color");
});

let truck = document.querySelector(".truck");
truck.addEventListener("click", function () {
  count = 2
  rollSlider();
  rollSliderMob();
  this.classList.add("color");
  heel.classList.remove("color");
  gazel.classList.remove("color");
});

//mobil





