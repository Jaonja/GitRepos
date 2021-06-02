let arrow = document.querySelector ("#additionalServicesHide")
let Hide = document.querySelector ("#hideBox")




arrow.addEventListener ("click", function(){ 
    if (arrow.classList.toggle('up')) { //это дичь "Denis_kalyanov"
        Hide.classList.add ('hide')
    } else {
     Hide.classList.remove('hide')
    }
     arrow.classList.toggle ('down')
 
 })