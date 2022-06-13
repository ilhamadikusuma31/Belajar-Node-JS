// var rect = {
//     perimeter: (x, y) => (2 * (x + y)),
//     area: (x, y) => (x * y)
// };

var rect = require('./persegi');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " +
        l + " and b = " + b);
    rect(l, b, (err, persegiiii) => {
        if (err) {
            console.log("ERROR: ", err.message);
        } else {
            console.log("The area of the rectangle of dimensions l = " +
                l + " and b = " + b + " is " + persegiiii.keliling());
            console.log("The perimeter of the rectangle of dimensions l = " +
                l + " and b = " + b + " is " + persegiiii.luas());
        }
    });
    console.log("This statement after the call to rect()");
};


solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);