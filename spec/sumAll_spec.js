describe('sumAll', () => {
    const
        sumAll = require('../sumAll.js')

    it('sumAll([1, 4]) should return a number.',
        () => expect(typeof sumAll([1, 4])).toEqual('number'))

    it('sumAll([1, 4]) should return a 10.',
        () => expect(sumAll([1, 4])).toEqual(10))

    it('sumAll([4, 1]) should return a 10.',
        () => expect(sumAll([4, 1])).toEqual(10))

    it('sumAll([5, 10]) should return a 45.',
        () => expect(sumAll([5, 10])).toEqual(45))

    it('sumAll([10, 5]) should return a 45.',
        () => expect(sumAll([10, 5])).toEqual(45))
})
