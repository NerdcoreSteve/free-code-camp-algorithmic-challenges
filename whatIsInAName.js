const
    R = require('ramda')

const
    keyMatch = x => y =>
        R.pipe(
            R.keys,
            R.all(key => x[key] === y[key]))
                (x)

module.exports = (xs, y) =>
    xs.filter(keyMatch(y))
