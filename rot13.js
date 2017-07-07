const
    R = require('ramda')

const
    decode = c => {
        const
            A = 'A'.charCodeAt(0),
            i = c.charCodeAt(0) - A,
            r = (i + 13) % 26

        return String.fromCharCode(r + A)
    }

module.exports = R.pipe(
    R.split(''),
    R.map(c => c.match(/[A-Z]/g) ? decode(c) : c),
    R.join(''))
