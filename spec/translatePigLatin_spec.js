describe('translatePigLatin', () => {
    const
        translatePigLatin = require('../translatePigLatin.js')

    it('translatePigLatin(\'california\') should return \'aliforniacay\'.',
        () => expect(translatePigLatin('california')).toEqual('aliforniacay'))
/*
translatePigLatin(\'paragraphs\') should return \'aragraphspay\'.
translatePigLatin(\'glove\') should return \'oveglay\'.
translatePigLatin(\'algorithm\') should return \'algorithmway\'.
translatePigLatin(\'eight\') should return \'eightway\'.
*/
})
