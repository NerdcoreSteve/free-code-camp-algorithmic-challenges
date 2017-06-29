describe('title_case', () => {
    const
        titleCase = require('../title_case.js')

    it('titleCase(\'I\'m a little tea pot\') should return a string.',
        () => expect(typeof titleCase('I\'m a little tea pot')).toEqual('string'))

    it('titleCase(\'I\'m a little tea pot\') should return \'I\'m A Little Tea Pot\'.',
        () => expect(titleCase('I\'m a little tea pot')).toEqual('I\'m A Little Tea Pot'))

    it('titleCase(\'sHoRt AnD sToUt\') should return \'Short And Stout\'.',
        () => expect(titleCase('sHoRt AnD sToUt')).toEqual('Short And Stout'))

    it('titleCase(\'HERE IS MY HANDLE HERE IS MY SPOUT\') should return \'Here Is My Handle Here Is My Spout\'.',
        () => expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout'))
})
