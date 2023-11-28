'use strict'

const isPrime = (num) => {
    if (num <= 1) return false; 
    if (num <= 3) return true; 
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
}
  
console.log(isPrime(5));  // true
console.log(isPrime(151)); // true
console.log(isPrime(911)); // true
console.log(isPrime(1987)); // true
console.log(isPrime(4));  // false