let a = parseFloat(prompt('Enter the length a', '').replace(',', '.'));
let b = parseFloat(prompt('Enter the length b', '').replace(',', '.'));
let c = parseFloat(prompt('Enter the length c', '').replace(',', '.'));

if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
  console.log('Incorrect input data');
} else if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) {
  console.log('Triangle doesn\'t exist');
} else if (a === b && b === c && a === c) {
  console.log('Equivalent triangle');
} else if (a === b || b === c || c === a) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
