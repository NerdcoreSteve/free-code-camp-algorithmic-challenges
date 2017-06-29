const
    R = require('ramda')

module.exports =
    R.pipe(
        R.split(' '),
        R.map(
            R.pipe(
                R.split(''),
                R.map(R.toLower),
                R.adjust(R.toUpper, 0),
                R.join(''))),
        R.join(' '))
            
