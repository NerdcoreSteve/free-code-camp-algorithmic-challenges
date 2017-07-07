describe('title_case', () => {
    const
        chunkArrayInGroups = require('../chunky_monkey.js')

    it('chunkArrayInGroups([\'a\', \'b\', \'c\', \'d\'], 2) should return [[\'a\', \'b\'], [\'c\', \'d\']].',
        () => expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]))

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].',
        () => expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]))

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].',
        () => expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual([[0, 1], [2, 3], [4, 5]]))

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].',
        () => expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toEqual([[0, 1, 2, 3], [4, 5]]))

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].',
        () => expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]))

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].',
        () => expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]))

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].',
        () => expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]))
})
