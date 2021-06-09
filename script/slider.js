const slider = document.querySelectorAll(".gazel-inform-box");
const sliderWidth = document.querySelector(".sliderWidth");
let count = 0;
let Width;

function init() {
  Width = document.querySelector(".slider ").offsetWidth;
  sliderWidth.style.width = Width * slider.length + "px";
  slider.forEach((item) => {
    item.style.width = Width + "px";
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
  rollSlider();
});

document.querySelector(".prevButton").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = slider.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderWidth.style.transform = "translate(-" + count * Width + "px)";
}

//mobil
document.querySelector("#prevSlideMob").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = slider.length - 1;
  }
  rollSlider();
});
document.querySelector("#nextSliderMob").addEventListener("click", function () {
  count++;
  if (count >= slider.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelectorAll("#positionSlide").forEach((positionSlide) => {
  positionSlide.addEventListener("click", function () {
    sliderWidth.style.left = -this.dataset.position + "px";
  });
});
