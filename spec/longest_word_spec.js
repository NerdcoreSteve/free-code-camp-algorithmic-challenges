describe("longest_word", () => {
    var longest_word = require("../longest_word.js")

    it("longest_word(\"The quick brown fox jumped over the lazy dog\") should return a number",
        () => expect(typeof longest_word("The quick brown fox jumped over the lazy dog"))
            .toEqual("number"))

    it("longest_word(\"The quick brown fox jumped over the lazy dog\") should return 6",
        () => expect(longest_word("The quick brown fox jumped over the lazy dog"))
            .toEqual(6))

    it("longest_word(\"May the force be with you\") should return 5",
        () => expect(longest_word("May the force be with you"))
            .toEqual(5))

    it("longest_word(\"Google do a barrel roll\") should return 6",
        () => expect(longest_word("May the force be with you"))
            .toEqual(5))

    it("longest_word(\"What is the average airspeed velocity of an unladen swallow\") should return 8",
        () => expect(longest_word("What is the average airspeed velocity of an unladen swallow"))
            .toEqual(8))

    it("longest_word(\"What if we try a super-long word such as otorhinolaryngology\") should return 19",
        () => expect(longest_word("What if we try a super-long word such as otorhinolaryngology"))
            .toEqual(19))
})
