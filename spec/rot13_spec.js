describe('rot13', () => {
    const
        rot13 = require('../rot13.js')

    it('rot13(\'SERR PBQR PNZC\') should decode to \'FREE CODE CAMP\'',
        () => expect(rot13('SERR PBQR PNZC')).toEqual('FREE CODE CAMP'))

    it('rot13(\'SERR CVMMN!\') should decode to \'FREE PIZZA!\'',
        () => expect(rot13('SERR CVMMN!')).toEqual('FREE PIZZA!'))

    it('rot13(\'SERR YBIR?\') should decode to \'FREE LOVE?\'',
        () => expect(rot13('SERR YBIR?')).toEqual('FREE LOVE?'))

    it('rot13(\'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.\') should decode to \'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.\'',
        () => expect(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toEqual('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'))
})
