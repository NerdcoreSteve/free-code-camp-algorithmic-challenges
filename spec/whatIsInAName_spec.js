describe('whatIsInAName', () => {
    const
        whatIsInAName = require('../whatIsInAName.js')

    it('whatIsInAName([{ first: \'Romeo\', last: \'Montague\' }, { first: \'Mercutio\', last: null }, { first: \'Tybalt\', last: \'Capulet\' }], { last: \'Capulet\' }) should return [{ first: \'Tybalt\', last: \'Capulet\' }].',
        () => expect(whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' })).toEqual([{ first: 'Tybalt', last: 'Capulet' }]))

    it('whatIsInAName([{ \'a\': 1 }, { \'a\': 1 }, { \'a\': 1, \'b\': 2 }], { \'a\': 1 }) should return [{ \'a\': 1 }, { \'a\': 1 }, { \'a\': 1, \'b\': 2 }].',
        () => expect(whatIsInAName([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 })).toEqual([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }]))

    it('whatIsInAName([{ \'a\': 1, \'b\': 2 }, { \'a\': 1 }, { \'a\': 1, \'b\': 2, \'c\': 2 }], { \'a\': 1, \'b\': 2 }) should return [{ \'a\': 1, \'b\': 2 }, { \'a\': 1, \'b\': 2, \'c\': 2 }].',
        () => expect(whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 })).toEqual([{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2, 'c': 2 }]))

    it('whatIsInAName([{ \'a\': 1, \'b\': 2 }, { \'a\': 1 }, { \'a\': 1, \'b\': 2, \'c\': 2 }], { \'a\': 1, \'c\': 2 }) should return [{ \'a\': 1, \'b\': 2, \'c\': 2 }].',
        () => expect(whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'c': 2 })).toEqual([{ 'a': 1, 'b': 2, 'c': 2 }]))
})
