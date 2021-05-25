let $additionalServicesHide = document.querySelector ("#additionalServicesHide")
let $HideBox = document.querySelector ("#hideBox")




$additionalServicesHide.addEventListener ("click", function(){
   if ($additionalServicesHide.classList.toggle('up')) {
       $HideBox.classList.add ('hide')
   } else {
    $HideBox.classList.remove('hide')
   }
    $additionalServicesHide.classList.toggle ('down')
    
})

