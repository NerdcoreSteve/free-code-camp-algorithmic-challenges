describe('factorial', () => {
  var factorial = require('../factorial.js')

  it('factorial(5) should return a number.',
    () => expect(typeof factorial(5)).toEqual('number'))

  it('factorial(5) should return 120.',
    () => expect(factorial(5)).toEqual(120))

  it('factorial(10) should return 3628800.',
    () => expect(factorial(10)).toEqual(3628800))

  it('factorial(20) should return 2432902008176640000.',
    () => expect(factorial(20))
      .toEqual(2432902008176640000))

  it('factorial(0) should return 1.',
    () => expect(factorial(0)).toEqual(1))
})
