describe('title_case', () => {
    const
        truncateString = require('../truncate_string.js')

    it('truncateString(\'A-tisket a-tasket A green and yellow basket\', 11) should return \'A-tisket...\'.',
        () => expect(truncateString('A-tisket a-tasket A green and yellow basket', 11)).toEqual('A-tisket...'))

    it('truncateString(\'Peter Piper picked a peck of pickled peppers\', 14) should return \'Peter Piper...\'.',
        () => expect(truncateString('Peter Piper picked a peck of pickled peppers', 14)).toEqual('Peter Piper...'))
    /*
truncateString(\'A-tisket a-tasket A green and yellow basket\', \'A-tisket a-tasket A green and yellow basket\'.length) should return \'A-tisket a-tasket A green and yellow basket\'.
truncateString(\'A-tisket a-tasket A green and yellow basket\', \'A-tisket a-tasket A green and yellow basket\'.length + 2) should return \'A-tisket a-tasket A green and yellow basket\'.
truncateString(\'A-\', 1) should return \'A...\'.
truncateString(\'Absolutely Longer\', 2) should return \'Ab...\'.
    */
})
