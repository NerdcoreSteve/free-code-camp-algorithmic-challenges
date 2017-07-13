const
    R = require('ramda')

const
    dnaMap = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }

module.exports =
    R.pipe(
        R.split(''),
        R.map(x => [x, dnaMap[x]]))
