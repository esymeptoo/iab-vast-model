import { SortedList } from '../../../src/util/sorted-list'

export default (createInstance) => {
  describe('#creatives', () => {
    it('gets creatives', () => {
      const inst = createInstance()
      expect(inst.creatives).to.be.an.instanceof(SortedList)
    })
  })

  describe('#impressions', () => {
    it('gets impressions', () => {
      const inst = createInstance()
      expect(inst.impressions).to.be.an.instanceof(Array)
    })
  })

  describe('#extensions', () => {
    it('gets extensions', () => {
      const inst = createInstance()
      expect(inst.extensions).to.be.an.instanceof(Array)
    })
  })

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#adSystem', () => {
    it('sets adSystem', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adSystem = value
      expect(inst.adSystem).to.equal(value)
    })
  })

  describe('#error', () => {
    it('sets error', () => {
      const inst = createInstance()
      const value = 'https://example.com/error'
      inst.error = value
      expect(inst.error).to.equal(value)
    })
  })

  describe('#errors', () => {
    it('sets multiple errors', () => {
      const inst = createInstance()
      const value1 = 'https://example.com/error'
      const value2 = 'https://example.com/error2'
      inst.errors.push(value1)
      inst.errors.push(value2)
      expect(inst.errors[0]).to.equal(value1)
      expect(inst.errors[1]).to.equal(value2)
    })
    it('is backwards compatible with error getter', () => {
      const inst = createInstance()
      const value = 'https://example.com/error'
      inst.errors.push(value)
      expect(inst.error).to.equal(value)
    })
    it('is backwards compatible with error setter', () => {
      const inst = createInstance()
      const value = 'https://example.com/error'
      inst.error = value
      expect(inst.errors[0]).to.equal(value)
    })
  })
}
