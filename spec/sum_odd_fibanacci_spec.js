describe("sum odd fibanacci", () => {
    const sumFibs = require("../sum_odd_fibonacci.js")

    it("sumFibs(5) should return a number.",
        () => expect(typeof sumFibs(1)).toEqual("number"))

    it("sumFibs(10) should return 10.",
        () => expect(sumFibs(10)).toEqual(10))

    it("sumFibs(1000) should return 1785.",
        () => expect(sumFibs(1000)).toEqual(1785))
})
