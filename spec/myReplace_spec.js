describe('myReplace', () => {
    const
        myReplace = require('../myReplace.js')

    it('myReplace(\'Let us go to the store\', \'store\', \'mall\') should return \'Let us go to the mall\'.',
        () => expect(myReplace('Let us go to the store', 'store', 'mall')).toEqual('Let us go to the mall'))

    it('myReplace(\'He is Sleeping on the couch\', \'Sleeping\', \'sitting\') should return \'He is Sitting on the couch\'.',
        () => expect(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toEqual('He is Sitting on the couch'))

    it('myReplace(\'This has a spellngi error\', \'spellngi\', \'spelling\') should return \'This has a spelling error\'.',
        () => expect(myReplace('This has a spellngi error', 'spellngi', 'spelling')).toEqual('This has a spelling error'))

    it('myReplace(\'His name is Tom\', \'Tom\', \'john\') should return \'His name is John\'.',
        () => expect(myReplace('His name is Tom', 'Tom', 'john')).toEqual('His name is John'))

    it('myReplace(\'Let us get back to more Coding\', \'Coding\', \'algorithms\') should return \'Let us get back to more Algorithms\'.',
        () => expect(myReplace('Let us get back to more Coding', 'Coding', 'algorithms')).toEqual('Let us get back to more Algorithms'))
})
