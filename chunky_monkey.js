const
    R = require('ramda')

module.exports = (xs, n) =>
    xs.reduce((xs, x) =>
        R.last(xs).length < n
            ? R.pipe(
                R.last,
                R.append(x),
                R.append(R.__, R.init(xs)))
                    (xs)
            : R.append([x], xs),
        [[]])
