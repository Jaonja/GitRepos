let timer_life = 20245; //секунды в минутах и часах

let timer = setInterval(function () {
  timer_life -= 1;

  if (timer_life == 0) {
    clearInterval(timer);
  }

  let w = Math.trunc(timer_life / 3600),
    m = Math.trunc((timer_life - w * 3600) / 60),
    s = Math.trunc(timer_life - (w * 3600 + m * 60));
    // когда меньше 10 сек добавляется 0
    w = w < 10 ? "0" + w : w;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

  document.querySelector(".time").innerHTML = w + ":" + m + ":" + s;
}, 1000);
