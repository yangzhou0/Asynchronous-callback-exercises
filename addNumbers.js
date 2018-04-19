const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  reader.question('Whats the number to add?  ', function(num){
    console.log(`before addition sum = ${sum}`);
    sum += parseInt(num);
    numsLeft--;
    if(numsLeft === 0) {completionCallback(sum); return;}
    console.log(`you just entered ${num}, now the sum is ${sum}, you have ${numsLeft} calls left`);
    addNumbers(sum, numsLeft, completionCallback);
  })
}


function completion (sum){
  console.log(`No more additions allowed. Final total sum is ${sum}`)
  reader.close();
}

addNumbers(0,4,completion);
