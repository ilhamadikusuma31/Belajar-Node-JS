const rect = require('./rectangle');


function solveRectangle(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, kotak) => {
        if (err) {
            console.log("Error: ", err.message);
        } else {
            console.log("Luas persegi :", kotak.area()) //refrence dari rectangle.js
            console.log("keliling persegi :", kotak.perimeter())
        }
    });

    console.log("program selesai");
}

solveRectangle(2, 3);
solveRectangle(0, 3);
solveRectangle(-9, 2);
solveRectangle(3, 5);