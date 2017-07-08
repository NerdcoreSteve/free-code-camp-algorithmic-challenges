var places = 4

var args_to_array = function (args) {
    return Array.prototype.slice.call(args)
}

var head = function (arr) {
    return arr[0]
}

var tail = function (arr) {
    return arr.slice(1)
}

var compose = function () {
    var functions  = args_to_array(arguments).reverse()
    return function () {
        var result = head(functions).apply(undefined, args_to_array(arguments))
        return tail(functions)
            .reduce(function (result, f) {
                return f(result)
            }, result)
    }
}

var curry = function (f) {
    var f_arity = f.length

    return function f2() {
        var f2_args = args_to_array(arguments)

        if(f2_args.length >= f_arity) {
            return f.apply(undefined, f2_args)
        } else {
            return function f3() {
                var f3_args = args_to_array(arguments)
                return f2.apply(undefined, f2_args.concat(f3_args))
            }
        }
    }
}

var num_to_string = function (string) {
    return string.toString()
}

var split = curry(function (breaker, string) {
    return string.split(breaker)
})

var string_to_char_array = split('')

var join = curry(function (glue, string) {
    return string.join(glue)
})

var concat_string_array = join('')

var map_by_index = function (f, i, arr) {
    var new_arr = []
    for(var j = 0; j < arr.length; j++) {
        if(i === j) {
            new_arr.push(f(arr[j]))
        } else {
            new_arr.push(arr[j])
        }
    }
    return new_arr
}

var converter_factory = function (conversion_map, places, place) {
    return function (arr) {
        return map_by_index(
            function (digit) {
                return conversion_map[digit]
            },
            places - place,
            arr)
    }
}

var first_converter =
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
        1)

var second_converter =
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
        2)

var third_converter =
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
        3)

var fourth_converter =
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
        4)

var range = function (num) {
    var arr = []
    for(var i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

var leading_zeroes = curry(function(width, arr) {
    return range(width - arr.length).map(function () { return '0' }).concat(arr)
})

module.exports = 
    compose(
        concat_string_array,
        fourth_converter,
        third_converter,
        second_converter,
        first_converter,
        leading_zeroes(places),
        string_to_char_array,
        num_to_string)
