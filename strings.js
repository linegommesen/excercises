"use strict";

const name = "Peter";
const animal = "cat";
const animalName = "Mandu";
const len = name.length;
const letter = name[0];

const text = `My name is ${name}.
 I have a ${animal} called ${animalName}.`;

console.log(text);

console.log(`${name} is ${len} characters long.`);

console.log(`The first letter of ${name} is ${letter}`);

const newName = "Albus Percival Wulfic Brian Dumbledore";
const total = newName.length;
const index2 = newName[2];
const index6 = newName[6];

console.log(`Total number of characters is ${total}`);
console.log(`Character at index 2 is ${index2}`);
console.log(`Character at index 6 is ${index6}`);

const str1 = "   There is     space here \n  ";
const str2 = str1.trim();

console.log(str2);

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17);

console.log(`_${firstName}_`);
console.log(`_${lastName}`);
