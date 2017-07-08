const
    R = require('ramda')

module.exports =
    R.pipe(
        R.sort((a, b) => a > b),
        ([a, b]) => R.range(a, b + 1),
        R.sum)
