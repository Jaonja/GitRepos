let cityAdd = document.querySelector("#city-add");
let selectCity = document.querySelector("#select");

cityAdd.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    let newOption = new Option(
      cityAdd.value,
      String(selectCity.options.length)
    );
    select.appendChild(newOption);
  }
});
