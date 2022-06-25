//core module
const fs = require('fs');


//menuliskan file secara sync
// fs.writeFileSync('data/test.txt', 'hello world secara sinkronus');



//menuliskan file secara async
// fs.writeFile('data/test.txt', 'hello world secara asinkronus', (e) => {
//     console.log(e);
// });


//membaca file secara sync
// const penampung = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(penampung);


//membaca file secara async
fs.readFile('data/test.txt', 'utf-8', (e, data) => {
    if (e) throw e;
    console.log(data)
});