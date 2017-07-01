describe('title_case', () => {
    const
        repeatStringNumTimes = require('../string_repeat.js')

    it('repeatStringNumTimes(\'*\', 3) should return \'***\'.',
        () => expect(repeatStringNumTimes('*', 3)).toEqual('***'))

    it('repeatStringNumTimes(\'abc\', 3) should return \'abcabcabc\'.',
        () => expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc'))

    it('repeatStringNumTimes(\'abc\', 4) should return \'abcabcabcabc\'.',
        () => expect(repeatStringNumTimes('abc', 4)).toEqual('abcabcabcabc'))

    it('repeatStringNumTimes(\'abc\', 1) should return \'abc\'.',
        () => expect(repeatStringNumTimes('abc', 1)).toEqual('abc'))

    it('repeatStringNumTimes(\'*\', 8) should return \'********\'.',
        () => expect(repeatStringNumTimes('*', 8)).toEqual('********'))

    it('repeatStringNumTimes(\'abc\', -2) should return \'\'.',
        () => expect(repeatStringNumTimes('abc', -2)).toEqual(''))
})
