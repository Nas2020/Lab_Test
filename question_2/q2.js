const mixedArray = ['Matrix', 1, true, 2, false, 3]


const multiplyNumbers = (mixedArray) => mixedArray.filter((num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => (num * 5));

console.log (multiplyNumbers(mixedArray));