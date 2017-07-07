module.exports = (xs, ...ys) =>
    xs.filter(x => !ys.includes(x))
