describe('sum odd fibanacci', () => {
    const sumFibs = require('../sum_odd_fibonacci.js')

    it('sumFibs(5) should return a number.',
        () => expect(typeof sumFibs(1)).toEqual('number'))

    it('sumFibs(10) should return 10.',
        () => expect(sumFibs(10)).toEqual(10))

    it('sumFibs(1000) should return 1785.',
        () => expect(sumFibs(1000)).toEqual(1785))

    it('sumFibs(4000000) should return 4613732.',
        () => expect(sumFibs(4000000)).toEqual(4613732))

    it('sumFibs(4) should return 5.',
        () => expect(sumFibs(4)).toEqual(5))

    it('sumFibs(75024) should return 135721.',
        () => expect(sumFibs(4)).toEqual(5))
})
