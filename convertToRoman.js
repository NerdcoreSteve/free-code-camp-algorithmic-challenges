const
    R = require('ramda')

const
    twos_table = {
        '0': '',
        '1': 'X',
        '2': 'XX',
        '3': 'XXX',
        '4': 'XL',
        '5': 'L',
        '6': 'LX',
        '7': 'LXX',
        '8': 'LXXX',
        '9': 'XC'
    },
    threes_table = {
        '0': '',
        '1': 'C',
        '2': 'CC',
        '3': 'CCC',
        '4': 'CD',
        '5': 'D',
        '6': 'DC',
        '7': 'DCC',
        '8': 'DCCC',
        '9': 'CM'
    },
    leading_zeroes = width => xs =>
        R.pipe(
            xs => width - xs.length,
            R.range(0),
            R.map(() => '0'),
            R.concat(R.__, xs))
                (xs),
    repeat_string = str => n =>
        R.pipe(R.repeat(str), R.join(''))(n),
    ones = R.cond([
        [R.lte('3'), repeat_string('I')],
        [R.equals('4'), () => 'IV'],
        [R.equals('5'), () => 'V'],
        [R.equals('6'), () => 'VI'],
        [R.equals('7'), () => 'VII'],
        [R.equals('8'), () => 'VIII'],
        [R.equals('9'), () => 'IX']
    ]),
    fours = repeat_string('M')

module.exports = 
    R.pipe(
        n => n.toString(),
        R.split(''),
        leading_zeroes(4),
        R.adjust(ones, 3),
        R.adjust(x => twos_table[x], 2),
        R.adjust(x => threes_table[x], 1),
        R.adjust(fours, 0),
        R.join(''))
