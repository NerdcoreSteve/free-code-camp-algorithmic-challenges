const
    R = require('ramda')

module.exports = (...xs) =>
    R.pipe(
        R.chain(x => x),
        R.reduce(
            (ys, x) =>
                ys.includes(x)
                ? ys
                : R.append(x, ys),
            []),
        R.sort(R.subtract))
            (xs)
