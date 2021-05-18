function insertValue() {
  let select = document.querySelector ("#select"),
  txtVal = document.getElementById ("val").value,
  newOption = document.createElement ("option"),
  newOptionVal = document.createTextNode(txtVal)

  newOption.appendChild(newOptionVal)
  select.insertBefore(newOption, select.lastChild)
}
//ЭТО ТЕСТОВЫЙ КОД  буду тут дорабатывать и допиывать