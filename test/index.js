const should = require('should')

describe('abbreviate', function () {
  const abbrText = 'a10n'
  const textArr = abbrText.split(/([0-9]+)/)
  it('return value first and last word is alphabet', function () {
    textArr[0].should.match(/[a-z]/)
  })
  it('return value should include number', function () {
    Number(textArr[1]).should.be.a.Number()
  })
})
