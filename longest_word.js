var R = require('ramda')

module.exports =
    R.pipe(
        R.split(' '),
        R.reduce((longest, word) =>
            longest.length >= word.length ? longest : word),
        R.length)
