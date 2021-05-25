let $gazel = document.querySelector("#gazel")
let $heel = document.querySelector("#heel")
let $truck = document.querySelector("#truck")



let $boxGazel = document.querySelector("#boxGazel")
let $boxHeel = document.querySelector("#boxHeel")
let $boxTruck = document.querySelector("#boxTruck")

let gazelInformBox = document.querySelectorAll ('.gazel-inform-box')
 console.log (gazelInformBox)
 let right = document.querySelector ('.right')
 let left = document.querySelector ('.left')





let w = $heel.addEventListener ('click', function(){
    if ($boxHeel.classList.add('hide') === $boxHeel.classList.add('hide')){
        $boxGazel.classList.add ('hide')
        $boxHeel.classList.remove ('hide')
        $boxTruck.classList.add('hide')
  
    }
})
$truck.addEventListener ('click', function(){
    if ($boxTruck.classList.add('hide') === $boxTruck.classList.add('hide')){
        $boxTruck.classList.remove ('hide')
        $boxGazel.classList.add ('hide')
        $boxHeel.classList.add ('hide')
    }
})
   
$gazel.addEventListener ('click', function(){
    if ($boxGazel === $boxGazel){
        $boxTruck.classList.add ('hide')
        $boxGazel.classList.remove ('hide')
        $boxHeel.classList.add ('hide')
    }
})     
$boxHeel.classList.add ('hide')
$boxTruck.classList.add ('hide')
