'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    if(c.length==0 || c.length==n)return 0
    c.sort((a,b)=>a-b);
    
    let lastStation=c[c.length-1];
    let last=n-1;
    let firstStation=c[0];
    
    if(c.length==1)return Math.max(firstStation, n-1-lastStation);
     
    var max = Math.max(firstStation, last-lastStation);
    
    for(let i=1; i<c.length; i++){
        let mid = (c[i]+c[i-1])/2;
        mid = Math.ceil(mid);
        max = Math.max(max, c[i]-mid);
    }
    
    return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}
