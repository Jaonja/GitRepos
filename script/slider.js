const images = document.querySelectorAll(".gazel-inform-box");
const sliderLine = document.querySelector(".slider .slider-line");
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
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
document.querySelectorAll("#positionSlide").forEach((positionSlide) => {
  positionSlide.addEventListener("click", function () {
    sliderLine.style.left = -this.dataset.position + "px";
    this.checked.style.borderColor = "red";
  });
});

/*
let images = document.querySelectorAll('.gazel-inform-box img')
let sliderline = document.querySelector(".slider-line");
console.log (images)
let count = 0;
let width;

function init (){
    console.log('resize')
    width = document.querySelector(".slider-line").offsetWidth
    sliderline.style.width = width * images.length + 'px'
    images.forEach ( item =>{
        item.style.width = width + 'px'
        item.style.height = 'auto'
        console.log (width)
    })
    console.log (width)

}
window.addEventListener ('resize', init)
init ()
*/

/* 1 слайдер
let line = document.querySelector(".slider-line")
let prevSlide = document.querySelector(".left");
let nextSlide = document.querySelector(".right");
let slides = document.querySelectorAll(".gazel-inform-box"); //все блоки
let sliderWidth = document.querySelector(".slider").offsetWidth;
console.log (sliderWidth)
let widthArray = [0]; // сьздаём массив
let lineWidth = 0;
let offset = 0;
let step = 0; // делаю шаг
let ostatok = 0; //остаток пикселей
for (let i = 0; i < slides.length; i++) {
  widthArray.push(slides[i].offsetWidth); //981*3 и ну и 0 элемент
  console.log (slides[i].offsetWidth) //проверяю длинну моего массива он равен 981 почему то
  lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth + "px";

prevSlide.onclick = function () {
  ostatok = lineWidth - sliderWidth - (offset + widthArray[step]);
  if (ostatok >= 0) { //убираем
    offset = offset + widthArray[step];
    line.style.left = -offset + "px";
  } else {
    line.style.left = -(lineWidth - sliderWidth) + "px";
    offset = 0;
    step = -1;
  }
  if (step + 1 == slides.length) {
    step = 0;
    offset = 0;
  } else {
    step++;
  }
  console.log (offset)
};
*/

/*
nextSlide.onclick = function () {
    ostatok = lineWidth + sliderWidth + (offset + widthArray[step]);
    if (ostatok >= 0) {
      offset = offset + widthArray[step];
      line.style.left = -offset + "px";
    } else {
      line.style.left = -(lineWidth - sliderWidth) + "px";
      offset = 0;
      step = 1;
    }
    if (step + 1 == slides.length) {
      step = 0;
      offset = 0;
    } else {
      step++;
    }
    console.log (offset)
  };
  */

/* 2 слайдер
let offset = 0;
let nextSlide = document.querySelector(".right");


nextSlide.addEventListener("click", function () {
  SliderLeft();
});

let prevSlide = document.querySelector(".left");
prevSlide.addEventListener("click", function () {
  Sliderright();
});

function Sliderright() {
  offset = offset - 1050;
  if (offset < 2400) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
}
function SliderLeft() {
  offset = offset + 1050;
  if (offset > 2400) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
}

document.querySelectorAll("#positionSlide").forEach((positionSlide) => {
  positionSlide.addEventListener("click", function () {
    sliderLine.style.left = -this.dataset.position + "px";
  });
});
*/
