process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', _ => inputString += _);

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    let testcases = +input();
       let output='';
    while (testcases--) {
        let numberOfGames = +input();
        for (let i = 1; i <= numberOfGames; i++) {
            let [initialState, numberOfCoin, q] = input().split(' ').map(ele => +ele);
             output += main(initialState, numberOfCoin, q) + '\n';
        }

    }
     process.stdout.write(output);
})

function input() {
    return inputString[currentLine++];
}

function main(initialState, numberOfCoin, q) {
  // console.log({ initialState, numberOfCoin, q });

  if (initialState !== q) {
        return(numberOfCoin - Math.floor(numberOfCoin / 2));
    } else {
       return(Math.floor(numberOfCoin / 2));
    }

}
