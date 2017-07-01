describe('title_case', () => {
    const
        repeatStringNumTimes = require('../string_repeat.js')

    it('repeatStringNumTimes(\'*\', 3) should return \'***\'.',
        () => expect(repeatStringNumTimes('*', 3)).toEqual('***'))

    it('repeatStringNumTimes(\'abc\', 3) should return \'abcabcabc\'.',
        () => expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc'))
    /*

repeatStringNumTimes(\'abc\', 4) should return \'abcabcabcabc\'.
repeatStringNumTimes(\'abc\', 1) should return \'abc\'.
repeatStringNumTimes(\'*\', 8) should return \'********\'.
repeatStringNumTimes(\'abc\', -2) should return \'\'.
    */
})
