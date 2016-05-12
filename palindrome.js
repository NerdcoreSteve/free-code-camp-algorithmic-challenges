var R = require('ramda')

var palindrome_test = (string) => {
    if(string.length < 2) return true
    else if (R.head(string) === R.last(string)) return palindrome_test(R.slice(1, -1, string))
    else return false
}

module.exports =
    R.pipe(
        R.replace(/[^A-Za-z0-9]/g, ''),
        R.toLower,
        palindrome_test)
