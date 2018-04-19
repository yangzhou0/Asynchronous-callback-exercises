const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr,sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if(madeAnySwaps){
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop)
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i],arr[i+1],function(isGreaterThan){
      if (isGreaterThan === 'yes') {
        [arr[i],arr[i+1]] =[arr[i+1],arr[i]];
        i++;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr,i,madeAnySwaps,outerBubbleSortLoop);
      }
      else if (isGreaterThan === 'no') {
        i++;
        innerBubbleSortLoop(arr,i,madeAnySwaps,outerBubbleSortLoop);
      }
    })
  }
  else{
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} > ${el2}? `, callback)
}

function sortCompletionCallback(arr){
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
}

absurdBubbleSort([3,4,2,-1,5],sortCompletionCallback);

// function bubbleSort(arr){
//   let isSorted = false;
//   while (!isSorted ) {
//     isSorted = true;
//     for (let i = 0; i < arr.length-1; i++){
//       if (arr[i]>arr[i+1]){
//         [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// }
