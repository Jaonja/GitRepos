
let name = document.querySelector ('.name')
let tel = document.querySelector ('.tel')
let orderForm = document.querySelector ('#orderForm')
let apply = document.querySelector ('#apply')

console.log (name)

name.onfocus = function () {
    name.classList.remove("error");
  };
  
  tel.onfocus = function () {
    tel.classList.remove("error");
  };
  
  function validating() {
    name.value == ""
      ? name.classList.add("error")
      : name.classList.remove("error");
      tel.value == ""
      ? tel.classList.add("error")
      : tel.classList.remove("error");
      name.value == "" || tel.value == "" || !apply.checked
      ? event.preventDefault()
      : form.submit();
  }
  
  orderForm.onsubmit = function () {
    validating();
  };