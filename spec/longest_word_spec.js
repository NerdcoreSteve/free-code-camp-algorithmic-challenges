describe("longest_word", () => {
    var longest_word = require("../longest_word.js")

    it("longest_word(\"The quick brown fox jumped over the lazy dog.\") should return a number",
        () => expect(typeof longest_word("The quick brown fox jumped over the lazy dog."))
            .toEqual("number"))

    /*
longest_word("The quick brown fox jumped over the lazy dog") should return 6.
longest_word("May the force be with you") should return 5.
longest_word("Google do a barrel roll") should return 6.
longest_word("What is the average airspeed velocity of an unladen swallow") should return 8.
longest_word("What if we try a super-long word such as otorhinolaryngology") should return 19.
    */
})
