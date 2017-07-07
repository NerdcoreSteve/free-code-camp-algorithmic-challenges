const
    R = require('ramda')

module.exports = arr =>
    R.pipe(
        R.split(''),
        R.all(c => arr[0].match(new RegExp(c, 'i'))))
            (arr[1])
