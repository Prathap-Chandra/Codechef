// this is the solution i have submitted
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var arr = "";
process.stdin.on('data', function(chunk) {
  arr += chunk;
});
process.stdin.on('end', function() {
  arr = arr.split("\n");
  var n = parseInt(arr.shift()); // in order ot get no of test cases
  for(let i=0;i<n;i++){ //loop through no of test cases.
      let tempArray = arr[i].split("");
      let sum = 0;
      for(let i = 0; i < tempArray.length; i++){
        sum += parseInt(tempArray[i]);  
      }
      process.stdout.write(sum.toString());
      process.stdout.write("\n");
      
  }
    
});