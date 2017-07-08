describe('diffArray', () => {
    const
        diffArray = require('../diffArray.js')

    it('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.',
        () => expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toEqual(true))

    it('[\'diorite\', \'andesite\', \'grass\', \'dirt\', \'pink wool\', \'dead shrub\'], [\'diorite\', \'andesite\', \'grass\', \'dirt\', \'dead shrub\'] should return [\'pink wool\'].',
        () => expect(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).toEqual(['pink wool']))

    it('[\'andesite\', \'grass\', \'dirt\', \'pink wool\', \'dead shrub\'], [\'diorite\', \'andesite\', \'grass\', \'dirt\', \'dead shrub\'] should return [\'diorite\', \'pink wool\'].',
        () => expect(diffArray(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).toEqual(['diorite', 'pink wool']))

    it('[\'andesite\', \'grass\', \'dirt\', \'dead shrub\'], [\'andesite\', \'grass\', \'dirt\', \'dead shrub\'] should return [].',
        () => expect(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub'])).toEqual([]))

    it('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].',
        () => expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]))
/*
[1, \'calf\', 3, \'piglet\'], [1, \'calf\', 3, 4] should return [\'piglet\', 4].

[], [\'snuffleupagus\', \'cookie monster\', \'elmo\'] should return [\'snuffleupagus\', \'cookie monster\', \'elmo\'].

[1, \'calf\', 3, \'piglet\'], [7, \'filly\'] should return [1, \'calf\', 3, \'piglet\', 7, \'filly\'].
*/
})
