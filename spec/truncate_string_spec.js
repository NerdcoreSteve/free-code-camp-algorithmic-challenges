describe('truncateString', () => {
    const
        truncateString = require('../truncate_string.js')

    it('truncateString(\'A-tisket a-tasket A green and yellow basket\', 11) should return \'A-tisket...\'.',
        () => expect(truncateString('A-tisket a-tasket A green and yellow basket', 11)).toEqual('A-tisket...'))

    it('truncateString(\'Peter Piper picked a peck of pickled peppers\', 14) should return \'Peter Piper...\'.',
        () => expect(truncateString('Peter Piper picked a peck of pickled peppers', 14)).toEqual('Peter Piper...'))

    it('truncateString(\'A-tisket a-tasket A green and yellow basket\', \'A-tisket a-tasket A green and yellow basket\'.length) should return \'A-tisket a-tasket A green and yellow basket\'.',
        () => expect(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)).toEqual('A-tisket a-tasket A green and yellow basket'))

    it('truncateString(\'A-tisket a-tasket A green and yellow basket\', \'A-tisket a-tasket A green and yellow basket\'.length + 2) should return \'A-tisket a-tasket A green and yellow basket\'.',
        () => expect(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)).toEqual('A-tisket a-tasket A green and yellow basket'))

    it('truncateString(\'A-\', 1) should return \'A...\'.',
        () => expect(truncateString('A-', 1)).toEqual('A...'))

    it('truncateString(\'Absolutely Longer\', 2) should return \'Ab...\'.',
        () => expect(truncateString('Absolutely Longer', 2)).toEqual('Ab...'))
})
