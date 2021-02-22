function countPrimeNumbers() {
  let amount = 0;

  for (let counter = 2; counter <= 100; counter++) {
    let notPrime = false;

    for (let i = 2; i < counter; i++) {
      if (counter % i === 0) {
        notPrime = true;
      }
    }

    if (notPrime === false) {
      amount += 1;
    }
  }

  return amount;
}

let st = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let ft = performance.now();

console.log("Execution time of calculating prime numbers 100 times was " + (ft - st) + " milliseconds.");
