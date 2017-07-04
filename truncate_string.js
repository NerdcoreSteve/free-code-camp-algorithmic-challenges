const
    R = require('ramda'),
    {Left, Right} = require('data.either'),
    shortEnough = (str, n) => n >= str.length ? Left(str) : Right(str)

module.exports = (str, n) =>
    shortEnough(str, n)
        .map(R.slice(0, n > 3 ? n - 3 : n))
        .map(R.concat(R.__, '...'))
        .fold(x => x, x => x)
