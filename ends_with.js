const tap = x => { console.log(x); return x }
module.exports = (str, target) => (new RegExp(target + '$')).test(str)
