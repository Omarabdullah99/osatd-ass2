//-----task no 1 start-----------
function calculateDifference(a, b) {
  return a - b;
}

console.log("Difference:", calculateDifference(10, 5));
//-----task no 1 end-----------

//-----task no 2 start-----------
function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log("isOdd", isOdd(5));

//-----task no 2 end-----------

//-----task no 3 start-----------
function findMin(numbers) {
  return Math.min(...numbers);
}

console.log("Minimum:", findMin([10, 5, 15, 9]));

//-----task no 3 end-----------

//-----task no 4 start-----------
function filterEvenNumbers(array) {
  const EvenNumber = array.filter((a) => a % 2 === 0);
  return EvenNumber;
}
console.log("filterEvenNumber", filterEvenNumbers([1, 2, 3, 4]));
//-----task no 4 end-----------

//-----task no 5 start-----------
function sortArrayDescending(array) {
  return array.sort((a, b) => b - a);
}
console.log(
  "sortArrayDescending",
  sortArrayDescending([3, 4, 90, 2, 50, 43, 23])
);
//-----task no 5 end-----------

//-----task no 6 start-----------
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log("Lowercased:", lowercaseFirstLetter("Hello Omar")); // Output: "hello"

//-----task no 6 end-----------

//-----task no 7 start-----------
function findAverage(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

console.log("Average:", findAverage([10, 20, 30]));
//-----task no 7 end-----------

//-----task no 8 start-----------
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log("Is Leap Year:", isLeapYear(2024)); 

//-----task no 8 end-----------
