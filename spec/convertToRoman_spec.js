describe('convertToRoman', () => {
    const
        convertToRoman = require('../convertToRoman.js')

    it('convertToRoman(2) should return \'II\'.',
        () => expect(convertToRoman(2)).toEqual('II'))

    it('convertToRoman(3) should return \'III\'.',
        () => expect(convertToRoman(3)).toEqual('III'))

    it('convertToRoman(4) should return \'IV\'.',
        () => expect(convertToRoman(4)).toEqual('IV'))

    it('convertToRoman(5) should return \'V\'.',
        () => expect(convertToRoman(5)).toEqual('V'))

    it('convertToRoman(9) should return \'IX\'.',
        () => expect(convertToRoman(9)).toEqual('IX'))

    it('convertToRoman(12) should return \'XII\'.',
        () => expect(convertToRoman(12)).toEqual('XII'))

    it('convertToRoman(16) should return \'XVI\'.',
        () => expect(convertToRoman(16)).toEqual('XVI'))

    it('convertToRoman(29) should return \'XXIX\'.',
        () => expect(convertToRoman(29)).toEqual('XXIX'))

    it('convertToRoman(44) should return \'XLIV\'.',
        () => expect(convertToRoman(44)).toEqual('XLIV'))

    it('convertToRoman(45) should return \'XLV\'.',
        () => expect(convertToRoman(45)).toEqual('XLV'))

    it('convertToRoman(68) should return \'LXVIII\'.',
        () => expect(convertToRoman(68)).toEqual('LXVIII'))

    it('convertToRoman(83) should return \'LXXXIII\'.',
        () => expect(convertToRoman(83)).toEqual('LXXXIII'))

    it('convertToRoman(97) should return \'XCVII\'.',
        () => expect(convertToRoman(97)).toEqual('XCVII'))

    it('convertToRoman(99) should return \'XCIX\'.',
        () => expect(convertToRoman(99)).toEqual('XCIX'))

    it('convertToRoman(500) should return \'D\'.',
        () => expect(convertToRoman(500)).toEqual('D'))

    it('convertToRoman(501) should return \'DI\'.',
        () => expect(convertToRoman(501)).toEqual('DI'))

    it('convertToRoman(649) should return \'DCXLIX\'.',
        () => expect(convertToRoman(649)).toEqual('DCXLIX'))

    it('convertToRoman(798) should return \'DCCXCVIII\'.',
        () => expect(convertToRoman(798)).toEqual('DCCXCVIII'))

    it('convertToRoman(891) should return \'DCCCXCI\'.',
        () => expect(convertToRoman(891)).toEqual('DCCCXCI'))

    it('convertToRoman(1000) should return \'M\'.',
        () => expect(convertToRoman(1000)).toEqual('M'))

    it('convertToRoman(1004) should return \'MIV\'.',
        () => expect(convertToRoman(1004)).toEqual('MIV'))

    it('convertToRoman(1006) should return \'MVI\'.',
        () => expect(convertToRoman(1006)).toEqual('MVI'))

    it('convertToRoman(1023) should return \'MXXIII\'.',
        () => expect(convertToRoman(1023)).toEqual('MXXIII'))

    it('convertToRoman(2014) should return \'MMXIV\'.',
        () => expect(convertToRoman(2014)).toEqual('MMXIV'))

    it('convertToRoman(3999) should return \'MMMCMXCIX\'.',
        () => expect(convertToRoman(3999)).toEqual('MMMCMXCIX'))
})
