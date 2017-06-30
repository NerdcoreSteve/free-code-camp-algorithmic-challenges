describe('title_case', () => {
    const
        confirmEnding = require('../ends_with.js')

    it('confirmEnding(\'Bastian\', \'n\') should return true.',
        () => expect(confirmEnding('Bastian', 'n')).toEqual(true))

    it('confirmEnding(\'Connor\', \'n\') should return false.',
        () => expect(confirmEnding('Connor', 'n')).toEqual(false))
    /*

confirmEnding(\'Walking on water and developing software from a specification are easy if both are frozen\', \'specification\') should return false.
confirmEnding(\'He has to give me a new name\', \'name\') should return true.
confirmEnding(\'Open sesame\', \'same\') should return true.
confirmEnding(\'Open sesame\', \'pen\') should return false.
confirmEnding(\'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing\', \'mountain\') should return false.
    */
})
