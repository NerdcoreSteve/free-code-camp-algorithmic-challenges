describe('title_case', () => {
    const
        titleCase = require('../title_case.js')

    it('titleCase(\'I\'m a little tea pot\') should return a string.',
        () => expect(typeof titleCase('I\'m a little tea pot')).toEqual('string'))

/*
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/
})
