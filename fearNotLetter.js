const
    R = require('ramda'),
    {Left, Right} = require('data.either')

module.exports =
    R.pipe(
        R.split(''),
        R.map(x => x.charCodeAt(0)),
        R.sort(R.subtract),
        xs => R.pipe(
            xs => [[null].concat(xs), xs],
            R.transpose,
            R.tail,
            R.init)
                (xs),
        R.filter(xs => xs[1] - xs[0] > 1),
        R.map(xs => R.range(xs[0] + 1, xs[1])),
        R.flatten,
        xs => xs.length === 0 ? Left(undefined) : Right(xs),
        either => either.fold(x => x, String.fromCharCode))
