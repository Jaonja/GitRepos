let arrow = document.querySelector("#additionalServicesHide");
let hide = document.querySelector("#hideBox");

arrow.onclick = function () {
  arrow.classList.toggle("down");
  hide.classList.toggle("hide");
};
