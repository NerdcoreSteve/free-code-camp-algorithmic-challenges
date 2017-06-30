module.exports = (str, target) => (new RegExp(target + '$')).test(str)
