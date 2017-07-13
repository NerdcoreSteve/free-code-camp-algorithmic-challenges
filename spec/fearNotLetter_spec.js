describe('fearNotLetter', () => {
    const
        fearNotLetter = require('../fearNotLetter.js')

    it('fearNotLetter(\'abce\') should return \'d\'.',
        () => expect(fearNotLetter('abce')).toEqual('d'))

    it('fearNotLetter(\'abcdefghjklmno\') should return \'i\'.',
        () => expect(fearNotLetter('abcdefghjklmno')).toEqual('i'))

    it('fearNotLetter(\'klmnoabdefgh\') should return \'ij\'.',
        () => expect(fearNotLetter('klmnoabdefgh')).toEqual('cij'))

    it('fearNotLetter(\'bcd\') should return undefined.',
        () => expect(fearNotLetter('bcd')).toEqual(undefined))

    it('fearNotLetter(\'yz\') should return undefined.',
        () => expect(fearNotLetter('yz')).toEqual(undefined))
})
