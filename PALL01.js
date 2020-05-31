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
    let palindromArray = inputArray[i].split("");
    palindromArray[0] === palindromArray[palindromArray.length - 1] 
    ? process.stdout.write("wins\n")
    : process.stdout.write("losses\n");
  }
});