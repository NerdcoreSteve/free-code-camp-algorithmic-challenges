describe('pairElement', () => {
    const
        pairElement = require('../pairElement.js')

    it('pairElement(\'ATCGA\') should return [[\'A\',\'T\'],[\'T\',\'A\'],[\'C\',\'G\'],[\'G\',\'C\'],[\'A\',\'T\']].',
        () => expect(pairElement('ATCGA')).toEqual([['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]))

    it('pairElement(\'TTGAG\') should return [[\'T\',\'A\'],[\'T\',\'A\'],[\'G\',\'C\'],[\'A\',\'T\'],[\'G\',\'C\']].',
        () => expect(pairElement('TTGAG')).toEqual([['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]))

    it('pairElement(\'CTCTA\') should return [[\'C\',\'G\'],[\'T\',\'A\'],[\'C\',\'G\'],[\'T\',\'A\'],[\'A\',\'T\']].',
        () => expect(pairElement('CTCTA')).toEqual([['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]))
})
