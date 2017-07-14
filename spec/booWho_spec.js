describe('booWho', () => {
    const
        booWho = require('../booWho.js')

    it('booWho(true) should return true.',
        () => expect(booWho(true)).toEqual(true))

    it('booWho(false) should return true.',
        () => expect(booWho(false)).toEqual(true))

    it('booWho([1, 2, 3]) should return false.',
        () => expect(booWho([1, 2, 3])).toEqual(false))

    it('booWho([].slice) should return false.',
        () => expect(booWho([].slice)).toEqual(false))

    it('booWho({ \'a\': 1 }) should return false.',
        () => expect(booWho({ 'a': 1 })).toEqual(false))

    it('booWho(1) should return false.',
        () => expect(booWho(1)).toEqual(false))

    it('booWho(NaN) should return false.',
        () => expect(booWho(NaN)).toEqual(false))

    it('booWho(\'a\') should return false.',
        () => expect(booWho('a')).toEqual(false))

    it('booWho(\'true\') should return false.',
        () => expect(booWho('true')).toEqual(false))

    it('booWho(\'false\') should return false.',
        () => expect(booWho('false')).toEqual(false))
})
