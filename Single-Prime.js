let number = parseInt(prompt('Enter a number: '));
let check = true;

if (number === 1) {
  console.error("The number must be greater than 1.");
}
for (let a = 2; a < number; a++) {
  if (number % a === 0) {
    check = false;
  }
}
if (check) {
  console.log(`${number} is prime`);
} else {
  console.log(`${number} is not prime`);
}
