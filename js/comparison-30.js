const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(
  element => element % 2 === 0
);
const eachElementInSecondIsOdd = secondArray.every(
  element => element % 2 !== 0
);

const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);
