process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputArray = "";

process.stdin.on('data', function(chunk) {
    inputArray += chunk;
});

process.stdin.on('end', function() {
  inputArray = inputArray.split("\n");
  let testCases = parseInt(inputArray.shift()); 
  for(let i = 0; i < testCases; i++){
    let arrayLength = parseInt(inputArray.shift()); 
    let xor = 0;
    for(let j = 0; j < arrayLength; j++){
        xor = xor ^ parseInt(inputArray.shift());
    }
    process.stdout.write(`${xor}\n`);
  }
});