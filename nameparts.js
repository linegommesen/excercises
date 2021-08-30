const fullName = "Line Middlename Gommesen";

const firstIndex = fullName.indexOf(" ");
const firstName = fullName.substring(0, firstIndex);
console.log(firstName);

// middlename
const indexLast = fullName.lastIndexOf(" ");
const middleName = fullName.substring(firstIndex + 1, indexLast);
console.log(middleName);

// lastname
const lastName = fullName.substring(indexLast + 1);
console.log(lastName);
