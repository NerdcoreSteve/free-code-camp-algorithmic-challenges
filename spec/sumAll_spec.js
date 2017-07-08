describe('sumAll', () => {
    const
        sumAll = require('../sumAll.js')

    it('sumAll([1, 4]) should return a number.',
        () => expect(typeof sumAll([1, 4])).toEqual('number'))

    /*

sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
    */
})
