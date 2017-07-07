describe('falsey', () => {
    const
        bouncer = require('../falsey.js')

    it('bouncer([7, \'ate\', \'\', false, 9]) should return [7, \'ate\', 9].',
        () => expect(bouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]))

    it('bouncer([\'a\', \'b\', \'c\']) should return [\'a\', \'b\', \'c\'].',
        () => expect(bouncer(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']))

    it('bouncer([false, null, 0, NaN, undefined, \'\']) should return [].',
        () => expect(bouncer([false, null, 0, NaN, undefined, ''])).toEqual([]))

    it('bouncer([1, null, NaN, 2, undefined]) should return [1, 2].',
        () => expect(bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]))
})
