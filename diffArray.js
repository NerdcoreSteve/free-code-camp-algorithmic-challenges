const
    xor = (a, b) => (a || b) && !(a && b)

module.exports = (xs, ys) =>
    xs.concat(ys).filter(x =>
        xor(xs.includes(x), ys.includes(x)))
