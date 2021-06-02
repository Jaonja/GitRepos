let timerLife = 20245 // (5 hour * 60 min *60 sec)

let timer = setInterval(function () {
  timerLife -= 1

  if (timerLife === 0) {
    clearInterval(timer)
  }

  let hour = Math.trunc(timerLife / 3600), //hour = 5
    min = Math.trunc((timerLife - hour * 3600) / 60), //min 30
    sec = Math.trunc(timerLife - (hour * 3600 + min * 60)) // sec 41
    // когда меньше 10 сек добавляется 0
    hour = hour < 10 ? "0" + hour : hour //05
    min = min < 10 ? "0" + min : min //30
    sec = sec < 10 ? "0" + sec : sec //37
  document.querySelector(".time").textContent = hour + ":" + min + ":" + sec //hour = 05:, min=30, sec=37
}, 1000)
