let nameInput = document.querySelector(".name");
let phoneInput = document.querySelector(".tel");
let orderForm = document.querySelector("#orderForm");
let apply = document.querySelector("#data-processing");
let orderButt = document.querySelector(".btn-order");
let btnMobileOrder = document.querySelector(".btn-mobile-order");

nameInput.onfocus = function () {
  nameInput.classList.remove("error");
};
phoneInput.onfocus = function () {
  phoneInput.classList.remove("error");
};

function validating() {
  if (nameInput.value.trim() === "" && phoneInput.value.trim() === "") {
    nameInput.classList.add("error");
    phoneInput.classList.add("error");
  }
  if (apply.checked == true && nameInput.value !== "" && phoneInput.value !== "") {
    orderForm.submit();
  }
  event.preventDefault();
}


orderForm.onsubmit = function () {
  validating();
};
