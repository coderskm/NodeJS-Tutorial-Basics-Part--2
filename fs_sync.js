const fs = require('fs');
const text = fs.readFileSync('./txt/intro.txt', 'utf-8');
console.log(text)

const textToWrite = `text written in intro.txt : ${text}`;
fs.writeFileSync('./txt/output.txt', textToWrite);