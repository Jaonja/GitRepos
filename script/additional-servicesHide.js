let $additionalServicesHide = document.querySelector ("#additionalServicesHide")
let $hideBox = document.querySelector("#hideBox")
let $upBox = document.querySelector("#upBox")




$additionalServicesHide.addEventListener ("click", function(){
    $hideBox.style.display = "none"
    $upBox.style.display = "inline-block"
    this.style.display = "none"
})

$upBox.addEventListener ("click", function(){
    $hideBox.style.display = "flex"
    $additionalServicesHide.style.display ="inline-block"
    this.style.display = "none"
})