const
    R = require('ramda')

const
    places = 4,
    converter_factory = (conversion_map, places, place) =>
        R.adjust(
            digit => conversion_map[digit],
            places - place),
    first_converter =
        converter_factory(
            {
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
            places,
            1),
    second_converter =
        converter_factory(
            {
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
            places,
            2),
    third_converter =
        converter_factory(
            {
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
            places,
            3),
    fourth_converter =
        converter_factory(
            {
                '0': '',
                '1': 'M',
                '2': 'MM',
                '3': 'MMM',
                '4': 'MMMM',
                '5': 'MMMMM',
                '6': 'MMMMMM',
                '7': 'MMMMMMM',
                '8': 'MMMMMMMM',
                '9': 'MMMMMMMMM'
            },
            places,
            4),
    leading_zeroes = R.curry((width, arr) =>
        R.range(0, width - arr.length).map(() => '0').concat(arr))

module.exports = 
    R.compose(
        R.join(''),
        fourth_converter,
        third_converter,
        second_converter,
        first_converter,
        leading_zeroes(places),
        R.split(''),
        n => n.toString())
