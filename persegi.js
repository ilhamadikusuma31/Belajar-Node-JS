module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() =>
            callback(new Error("Rectangle dimensions should be greater than zero: l = " +
                    x + ", and b = " + y),
                null),
            2000);
    else
        setTimeout(() =>
            callback(null, {
                keliling: () => (2 * (x + y)),
                luas: () => (x * y)
            }),
            2000);
}