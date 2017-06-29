describe('palindrome', () => {
    var palindrome = require('../palindrome.js')

    it('palindrome(\'eye\') should return a boolean.',
        () => expect(typeof palindrome('eye')).toEqual('boolean'))

    it('palindrome(\'eye\') should return true.',
        () => expect(palindrome('eye')).toEqual(true))

    it('palindrome(\'race car\') should return true.',
        () => expect(palindrome('race car')).toEqual(true))

    it('palindrome(\'not a palindrome\') should return false.',
        () => expect(palindrome('not a palindrome')).toEqual(false))

    it('palindrome(\'A man, a plan, a canal. Panama\') should return true.',
        () => expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true))

    it('palindrome(\'never odd or even\') should return true.',
        () => expect(palindrome('never odd or even')).toEqual(true))

    it('palindrome(\'nope\') should return false.',
        () => expect(palindrome('nope')).toEqual(false))

    it('palindrome(\'almostomla\') should return false.',
        () => expect(palindrome('almostomla')).toEqual(false))

    it('palindrome(\'My age is 0, 0 si ega ym.\') should return true.',
        () => expect(palindrome('My age is 0, 0 si ega ym.')).toEqual(true))

    it('palindrome(\'1 eye for of 1 eye.\') should return false.',
        () => expect(palindrome('1 eye for of 1 eye.')).toEqual(false))

    it('palindrome(\'0_0 (: /-\ :) 0-0\') should return true.',
        () => expect(palindrome('0_0 (: /-\ :) 0-0')).toEqual(true))
})
