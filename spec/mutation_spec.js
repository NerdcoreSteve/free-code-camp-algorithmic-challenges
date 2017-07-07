describe('mutation', () => {
    const
        mutation = require('../mutation.js')

    it('mutation([\'hello\', \'hey\']) should return false.',
        () => expect(mutation(['hello', 'hey'])).toEqual(false))

    it('mutation([\'hello\', \'Hello\']) should return true.',
        () => expect(mutation(['hello', 'Hello'])).toEqual(true))

    it('mutation([\'zyxwvutsrqponmlkjihgfedcba\', \'qrstu\']) should return true.',
        () => expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toEqual(true))

    it('mutation([\'Mary\', \'Army\']) should return true.',
        () => expect(mutation(['Mary', 'Army'])).toEqual(true))

    it('mutation([\'Mary\', \'Aarmy\']) should return true.',
        () => expect(mutation(['Mary', 'Aarmy'])).toEqual(true))

    it('mutation([\'Alien\', \'line\']) should return true.',
        () => expect(mutation(['Alien', 'line'])).toEqual(true))

    it('mutation([\'floor\', \'for\']) should return true.',
        () => expect(mutation(['floor', 'for'])).toEqual(true))

    it('mutation([\'hello\', \'neo\']) should return false.',
        () => expect(mutation(['hello', 'neo'])).toEqual(false))

    it('mutation([\'voodoo\', \'no\']) should return false.',
        () => expect(mutation(['voodoo', 'no'])).toEqual(false))
})
