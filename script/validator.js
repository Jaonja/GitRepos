let nameInput = document.querySelector(".name");
let phoneInput = document.querySelector(".tel");
let orderForm = document.querySelector("#orderForm");
let apply = document.querySelector("#data-processing");
let orderButt = document.querySelector(".btn-order");
let btnMobileOrder = document.querySelector(".btn-mobile-order");

nameInput.onfocus = function () {
  nameInput.classList.remove("invalid");
};
phoneInput.onfocus = function () {
  phoneInput.classList.remove("invalid");
};

function validating() {
  if (nameInput.value.trim() === "" && phoneInput.value.trim() === "") {
    nameInput.classList.add("invalid");
    phoneInput.classList.add("invalid");
  }
  event.preventDefault();
}

function checkValidating() {
  if (apply.checked && nameInput.value !== "" && phoneInput.value !== "") {
    orderForm.submit();
  }
}

orderForm.onsubmit = function () {
  validating();
  checkValidating();
};
