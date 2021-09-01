const max = 9;

const array = [1];

let counter = 1;
init();
function init() {
  //   console.log("init");
  counter++;
  //   counter = array.length - 1;
  loop();
}

function loop() {
  //   counter++;
  counter = array.push(counter);
  console.log(array);
  if (counter < max) {
    setTimeout(init, 800);
  }
  //   console.log("loop");
}
