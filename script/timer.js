let timerLife = 20245 // (5 hour * 60 min *60 sec)

let timer = setInterval(function () {
  timerLife -= 1

  if (timerLife === 0) {
    clearInterval(timer)
  }

  let hour = Math.trunc(timerLife / 3600),
    min = Math.trunc((timerLife - hour * 3600) / 60),
    sec = Math.trunc(timerLife - (hour * 3600 + min * 60))
    // когда меньше 10 сек добавляется 0
    hour = hour < 10 ? "0" + hour : hour
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

  document.querySelector(".time").textContent = hour + ":" + min + ":" + sec
}, 1000)
