const
    R = require('ramda')

const
    ones_table = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    },
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
    }

module.exports = 
    R.pipe(
        R.toString,
        R.split(''),
        R.reverse,
        R.adjust(x => ones_table[x], 0),
        R.adjust(x => twos_table[x], 1),
        R.adjust(x => threes_table[x], 2),
        R.adjust(
            R.pipe(
                R.repeat('M'),
                R.join('')),
            3),
        R.reverse,
        R.join(''))
