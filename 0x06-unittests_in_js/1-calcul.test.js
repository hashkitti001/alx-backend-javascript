const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe("test calculateNumber with op type string arg", () => {
    describe('type === "SUM"', () => {
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
    describe('type === "SUBTRACT"', () => {
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
        }),
    describe('type === "DIVIDE"', () => {
        it("b is 0", () => {
            assert.strictEqual(calculateNumber('DIVIDE', 9.5, 0), 'Error')
        })
        it("a and b are positive", () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.5), 2)
        })
        it("a and b are both positive whole numbers", () => {
            assert.strictEqual(calculateNumber('DIVIDE', 3, 4), 0.75)
        })
        it('positive number and number rounded up to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
        });

        it('negative number and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
        });
        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
        });
    })
})