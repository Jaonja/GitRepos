
let nameBox = document.querySelector ('.name')
let tel = document.querySelector ('.tel')
let orderForm = document.querySelector ('#orderForm')
let apply = document.querySelector ('#apply')

console.log (nameBox)

nameBox.onfocus = function () {
  nameBox.classList.remove("error");
  };
  
  tel.onfocus = function () {
    tel.classList.remove("error");
  };
  
  function validating() {
    nameBox.value == ""
      ? nameBox.classList.add("error")
      : nameBox.classList.remove("error");
      tel.value == ""
      ? tel.classList.add("error")
      : tel.classList.remove("error");
      nameBox.value == "" || tel.value == "" || !apply.checked
      ? preventDefault()
      : form.submit();
  }
  
  orderForm.onsubmit = function () {
    validating();
  };
  console.log (orderForm)