const
    R = require('ramda'),
    {Left, Right} = require('data.either')

const
    shortEnough = (str, n) => n >= str.length ? Left(str) : Right(str),
    conditionalSlice = n => str => R.slice(0, n <= 3 ? n : n - 3, str)

module.exports = (str, n) =>
    shortEnough(str, n)
        .map(conditionalSlice(n))
        .map(R.concat(R.__, '...'))
        .fold(x => x, x => x)
