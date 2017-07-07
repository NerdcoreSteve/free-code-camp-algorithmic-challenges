describe('getIndexToIns', () => {
    const
        getIndexToIns = require('../getIndexToIns.js')

    it('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.',
        () => expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3))

    it('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.',
        () => expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2))

    it('getIndexToIns([40, 60], 50) should return 1.',
        () => expect(getIndexToIns([40, 60], 50)).toEqual(1))

    it('getIndexToIns([3, 10, 5], 3) should return 0.',
        () => expect(getIndexToIns([3, 10, 5], 3)).toEqual(0))

    it('getIndexToIns([5, 3, 20, 3], 5) should return 2.',
        () => expect(getIndexToIns([5, 3, 20, 3], 5)).toEqual(2))

    it('getIndexToIns([2, 20, 10], 19) should return 2.',
        () => expect(getIndexToIns([2, 20, 10], 19)).toEqual(2))

    it('getIndexToIns([2, 5, 10], 15) should return 3.',
        () => expect(getIndexToIns([2, 5, 10], 15)).toEqual(3))
})
