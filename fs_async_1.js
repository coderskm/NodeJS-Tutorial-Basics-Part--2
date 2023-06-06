const fs = require("fs");
fs.readFile('./txt/intro.txt', 'utf-8', (err, data) => {
    if(err) return console.log("ERROR!🃏 ")
    console.log(data)
})
console.log("inside intro.txt:-")


