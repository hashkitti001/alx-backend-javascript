const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe("test calculateNumber with op type string arg", () => {
   describe('type == "SUM"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 5.0, 5.0), 10)
        })
        it('positive numbers with equal after rounding', () => {
            assert.strictEqual(calculateNumber('SUM', 2.4, 1.8), 4)
        })
        it("different positive numbers", () => {
            assert.strictEqual(calculateNumber("SUM", 2.4, 8.0), 10)
        })
        it("negative numbers equal after rounding", () => {
            assert.strictEqual(calculateNumber('SUM', -5.8, -6), -12)
        })
        it("negative numbers not equal after rounding", () => {
            assert.strictEqual(calculateNumber('SUM', -5.8, -4.9), -11)
        })
   }), 
   describe('type == "SUBTRACT"', () => {
    it('equal positive numbers after rounding', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.2), 0)
    })
    it('unequal positive numbers after rounding', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 7.8, 4.3), 4)
    })
    it('negative numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -13.5, -6.7), -6)
    })
    it('when a is greater than b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 14.0, 7.0), 7)
    })
    it('when b is greater than a', () => {
          assert.strictEqual(calculateNumber('SUBTRACT', 13.5, 16.7), -3)
    })
   })
})