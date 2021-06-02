
let offset = 0;
let sliderLine = document.querySelector('.slider-line')
let nextSlide = document.querySelector('.right')

nextSlide.addEventListener('click', function(){
    SliderLeft()
})

 

let prevSlide = document.querySelector('.left')
    prevSlide.addEventListener('click', function () {
    Sliderright()
   
   
});

function Sliderright(){
     offset = offset - 1050
    if (offset < 2400) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
 

}
 function SliderLeft (){ offset = offset + 1050
    if (offset > 2400) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
 }

document.querySelectorAll('#positionSlide').forEach(positionSlide => {
    positionSlide.addEventListener('click', function () {
        sliderLine.style.left = -this.dataset.position + 'px'
    })
})

