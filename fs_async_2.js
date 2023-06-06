const fs = require('fs');
fs.readFile('./txt/file1.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.writeFile("./txt/final.txt", "utf-8", (err) => {
          `${data1}\n${data2}`;
          console.log("written in final.txt");
        });
    })  
})