const
    R = require('ramda')

module.exports =
    R.pipe(
        R.split(''),
        R.map(x => x.charCodeAt(0)),
        R.sort(R.subtract),
        xs => R.pipe(
            xs => [[null].concat(xs), xs],
            R.transpose,
            R.slice(1, -1))
                (xs),
        R.filter(xs => xs[1] - xs[0] > 1),
        R.chain(xs => R.range(xs[0] + 1, xs[1])),
        R.map(String.fromCharCode),
        xs => xs.length === 0 ? undefined : xs.join(''))
