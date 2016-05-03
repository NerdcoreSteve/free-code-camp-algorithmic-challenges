describe("reverse", () => {
  var reverse = require("../reverse.js")

  it("should return a string",
    () => expect(typeof reverse("Howdy")).toEqual("string"))

  it("\"hello\" should become \"olleh\"",
    () => expect(reverse("hello")).toEqual("olleh"))

  it("\"Howdy\" should become \"ydwoH\"",
    () => expect(reverse("Howdy")).toEqual("ydwoH"))

  it("\"Greetings from Earth\" should become \"htraE morf sgniteerG\"",
    () => expect(reverse("Greetings from Earth"))
      .toEqual("htraE morf sgniteerG"))
})
