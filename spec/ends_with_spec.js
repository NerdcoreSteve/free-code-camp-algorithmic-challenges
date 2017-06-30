describe('title_case', () => {
    const
        confirmEnding = require('../ends_with.js')

    it('confirmEnding(\'Bastian\', \'n\') should return true.',
       () => expect(confirmEnding('Bastian', 'n')).toEqual(true))

    it('confirmEnding(\'Connor\', \'n\') should return false.',
       () => expect(confirmEnding('Connor', 'n')).toEqual(false))

    it('confirmEnding(\'Walking on water and developing software from a specification are easy if both are frozen\', \'specification\') should return false.',
       () => expect(confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification')).toEqual(false))

    it('confirmEnding(\'He has to give me a new name\', \'name\') should return true.',
       () => expect(confirmEnding('He has to give me a new name', 'name')).toEqual(true))

    it('confirmEnding(\'Open sesame\', \'same\') should return true.',
       () => expect(confirmEnding('Open sesame', 'same')).toEqual(true))

    it('confirmEnding(\'Open sesame\', \'pen\') should return false.',
       () => expect(confirmEnding('Open sesame', 'pen')).toEqual(false))

    it('confirmEnding(\'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing\', \'mountain\') should return false.',
       () => expect(confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain')).toEqual(false))
})
