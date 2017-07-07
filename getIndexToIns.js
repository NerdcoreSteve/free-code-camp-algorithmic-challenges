module.exports = (xs, y) => xs
    .sort((a, b) => a > b)
    .filter(x => x < y)
    .length
