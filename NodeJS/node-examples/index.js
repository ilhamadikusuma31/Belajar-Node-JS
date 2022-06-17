var rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => (x * y),
};


function solveRectangle(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("dimensi harus lebih besar dari 0")
    } else {
        console.log("area of a rectangle is " + rect.area(l, b));
        console.log("perimeter of a rectangle is " + rect.perimeter(l, b));
    }
}

solveRectangle(2, 3);
solveRectangle(0, 3);
solveRectangle(-9, 2);
solveRectangle(3, 5);