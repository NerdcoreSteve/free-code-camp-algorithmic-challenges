describe('convertHTML', () => {
    const
        convertHTML = require('../convertHTML.js')

    it('convertHTML(\'Dolce & Gabbana\') should return Dolce &amp; Gabbana.',
        () => expect(convertHTML('Dolce & Gabbana')).toEqual('Dolce &amp; Gabbana'))

    it('convertHTML(\'Hamburgers < Pizza < Tacos\') should return Hamburgers &lt; Pizza &lt; Tacos.',
        () => expect(convertHTML('Hamburgers < Pizza < Tacos')).toEqual('Hamburgers &lt; Pizza &lt; Tacos'))

    it('convertHTML(\'Stuff in "quotation marks"\') should return Stuff in &quot;quotation marks&quot;.',
        () => expect(convertHTML('Sixty > twelve')).toEqual('Sixty &gt; twelve'))

    it('convertHTML(\'Sixty > twelve\') should return Sixty &gt; twelve.',
        () => expect(convertHTML('Sixty > twelve')).toEqual('Sixty &gt; twelve'))

    it('convertHTML(\'Shindler\'s List\') should return Shindler&apos;s List.',
        () => expect(convertHTML('Shindler\'s List')).toEqual('Shindler&apos;s List'))

    it('convertHTML(\'<>\') should return &lt;&gt;.',
        () => expect(convertHTML('<>')).toEqual('&lt;&gt;'))

    it('convertHTML(\'abc\') should return abc.',
        () => expect(convertHTML('abc')).toEqual('abc'))
})
