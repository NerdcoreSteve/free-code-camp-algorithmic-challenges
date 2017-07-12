const
    R = require('ramda')

const
    consonantPig = R.pipe(
        R.match(/([^aeiou]+)(.*)/),
        R.tail,
        R.reverse(),
        R.join(''),
        str => str + 'ay'),
    vowelPig = str => str + 'way'
        
module.exports = str =>
    str.charAt(0).match(/[aeiou]/)
        ? vowelPig(str)
        : consonantPig(str)
