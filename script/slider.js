let $gazel = document.querySelector("#gazel")
let $heel = document.querySelector("#heel")
let $truck = document.querySelector("#truck")
console.log ($gazel)


let $boxGazel = document.querySelector("#boxGazel")
let $boxHeel = document.querySelector("#boxHeel")
let $boxTruck = document.querySelector("#boxTruck")
console.log ($boxHeel)





$gazel.addEventListener ('click', function(){
    $boxHeel.style.display = "none"
    $boxTruck.style.display = "none"
    $boxGazel.style.display ="flex"
    this.style.borderColor ="yellow"
    $heel.style.borderColor = "#EBEBEB"
    $truck.style.borderColor = "#EBEBEB"
})

$heel.addEventListener ('click', function(){
   $boxTruck.style.display = "none"
    $boxGazel.style.display = "none"
    $boxHeel.style.display = "flex"
    this.style.borderColor ="yellow"
    $gazel.style.borderColor = "#EBEBEB"
    $truck.style.borderColor = "#EBEBEB"
})
$truck.addEventListener ('click', function(){
    $boxTruck.style.display = "flex"
     $boxGazel.style.display = "none"
     $boxHeel.style.display = "none"
     this.style.borderColor ="yellow"
     $gazel.style.borderColor = "#EBEBEB"
     $heel.style.borderColor = "#EBEBEB"
 })
 
