const
    R = require('ramda')

module.exports = R.map(R.pipe(R.sort((x, y) => y - x), R.head))
