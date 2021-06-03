const images = document.querySelectorAll(".gazel-inform-box");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

document.querySelector(".right").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".left").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.left = - count * width + "px"; //sliderLine.style.transform = "translate(-" + count * width + "px)"; можно сделать так
}
document.querySelectorAll("#positionSlide").forEach((positionSlide) => {
    positionSlide.addEventListener("click", function () {
    sliderLine.style.left = -this.dataset.position + "px";
  })
});
