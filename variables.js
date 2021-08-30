"use strict";
const bool = true;
console.log(bool);

const num = 41;
console.log(num);

const str = "Peter";
console.log(str);

const obj = {
  cats: 2,
  cars: 1,
};
console.log(obj);

const nothing = null;
console.log(nothing);

let undf;
console.log(undf);

const symbol = Symbol("symbol");
console.log(symbol);

const n1 = 1;
const n2 = 2;
const s1 = "1";
const s2 = "2";

n1 + n1;
console.log(n1 + n2);
s1 + s2;
console.log(s1 + s2);

n1 + s2;
console.log(n1 + s2);
s1 + n2;
console.log(s1 + n2);

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);

const value = NaN;
if (value) {
  console.log("Value is thruthy");
} else {
  console.log("Value is false");
}
