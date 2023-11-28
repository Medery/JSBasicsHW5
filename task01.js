'use strict'

for (let number = 1; number <= 10; number++) {
    let row = '';
    console.log('-----------------------')
    for (let power = 1; power <= 10; power++) {
      row += `${number ** power}\t`; 
    }
    console.log(row); 
  }
  