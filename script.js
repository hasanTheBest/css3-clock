function updateClockHand() {
  const time = new Date();
  const seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();

  // update second
  // 270 for hand at 12 and 1 for 59 base count
  styles(select(".second-hand"), seconds * 6 + 270 + 1);

  // update minutes
  styles(select(".minute-hand"), minutes * 6 + 270 + 1);

  // update hours
  styles(select(".hour-hand"), hours * 15 + 270 + 1);

  console.log(seconds, minutes, hours);
}

setInterval(updateClockHand, 1000);

function styles(element, value, property = "transform") {
  element.style[property] =
    property === "transform" ? `rotate(${value}deg)` : value;
}

function select(selector) {
  return document.querySelector(selector);
}
