const
    fibRange = n => {
        if(n < 1) return 0
        var fibs = [1, 1]
        while(fibs[fibs.length - 1] <= n) {
            fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1])
        }
        if (fibs[fibs.length - 1] > n) fibs.pop()
        return fibs
    },
    oddFibs = n => fibRange(n).filter(m => m % 2 !== 0),
    oddFibSum = n => oddFibs(n).reduce((x, y) => x + y),
    sumFibs = oddFibSum

module.exports = sumFibs
