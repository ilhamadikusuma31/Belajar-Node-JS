module.exports = (x, y, kolbek) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            // kolbek(error,null)
            kolbek(new Error("dimensi harus lebih besar dari 0"), null),
            2000);
    } else {
        setTimeout(() =>
            // kolbek(null, rumus)
            kolbek(null, {
                perimeter: () => 2 * (x + y),
                area: () => (x * y)
            }),
            2000);

    }
}