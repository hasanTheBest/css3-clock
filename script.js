select(".tik").addEventListener("click", () => {
  select(".sound").play();
});

function updateClockHand() {
  const time = new Date();
  const seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();

  // update second
  // 270 for hand at 12 and 1 for 59 base count
  styles(select(".second-hand"), seconds * 6 + 270 + 1);

  // update minutes
  styles(select(".minute-hand"), minutes * 6 + 270 + 1 + (seconds + 1) / 10);

  // update hours
  // styles(select(".hour-hand"), hours * 15 + 270 + 1);
  const degree = hours > 12 ? 15 : 30;
  styles(select(".hour-hand"), hours * degree + 270 + 1 + (minutes + 1) / 2);

  // console.log(seconds, minutes, hours);
}

setInterval(updateClockHand, 1000);

// Helper 1. select html element
function select(selector) {
  return document.querySelector(selector);
}

// Helper 2. style to the element
function styles(element, value, property = "transform") {
  element.style[property] =
    property === "transform" ? `rotate(${value}deg)` : value;
}
