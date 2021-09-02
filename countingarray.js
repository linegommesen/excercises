// const max = 9;

const array = [];
// console.log(array);

let counter = 0;
init();
function init() {
  counter++;
  loop();
  //   array.length = 8;
}

function loop() {
  if (array.length <= 9) {
    console.log("IF");
    counter = array.unshift(counter);
    console.log(array);
    setTimeout(init, 800);
  } else {
    array.pop();
    console.log("POP");
    counter = array.unshift(counter);
    console.log(array);
    // setTimeout(init, 800);
  }
}
