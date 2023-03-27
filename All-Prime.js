let range = parseInt(prompt(`Enter the End Value Of The Range`));

for (let x = 10; x < range; x++) {
  let check = true;

  for (let y = 2; y < x; y++) {
    if (x % y == 0) {
      check = false;
    }
  }
  if (check) {
    console.log(x);
  }
}
