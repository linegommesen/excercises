const countingArray = [];

let counter = 0;
window.addEventListener("DOMContentLoaded", init);
function init() {
  counter++;
  loop();
}

function loop() {
  if (countingArray.length < 9) {
    //adds the new number to the beginning of the array.
    countingArray.unshift(counter);
  } else {
    //removes a number from the end of the array.
    countingArray.pop();
    //adds a new number to the beginning of the array.
    countingArray.unshift(counter);
  }
  console.log(countingArray);
  //after 800 milliseconds the init function is called again.
  setTimeout(init, 800);
}
