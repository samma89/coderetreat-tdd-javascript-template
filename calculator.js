const sumTwoIntegers = function (x, y) {
    //validating the integrity of the inputs
    if (isNaN(x) || isNaN(y)) {
        throw new Error('X and Y values only can be integers');
    }
    return x + y;
};

module.exports = {
    sumTwoIntegers: sumTwoIntegers,
};