const
    R = require('ramda'),
    {Left, Right} = require('data.either'),
    notNeg = n => n < 0 ? Left('') : Right(n)

module.exports = (str, n) =>
    notNeg(n)
        .map(R.range(0))
        .map(R.map(() => str))
        .map(R.join(''))
        .fold(x => x, x => x)
    
