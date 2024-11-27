const {expect} = require('chai')
const calculateNumber = require('./1-calcul')

describe("test calculateNumber with op type string arg", () => {
    describe('type === "SUM"', () => {
        it('equal positive numbers', () => {
            expect(calculateNumber('SUM', 5.0, 5.0)).to.equal(10)
        })
        it('positive numbers with equal after rounding', () => {
            expect(calculateNumber('SUM', 2.4, 1.8)).to.equal(4)
        })
        it("different positive numbers", () => {
            expect(calculateNumber("SUM", 2.4, 8.0)).to.equal(10)
        })
        it("negative numbers equal after rounding", () => {
            expect(calculateNumber('SUM', -5.8, -6)).to.equal(-12)
        })
        it("negative numbers not equal after rounding", () => {
            expect(calculateNumber('SUM', -5.8, -4.9)).to.equal(-11)
        })
    }),
    describe('type === "SUBTRACT"', () => {
            it('equal positive numbers after rounding', () => {
                expect(calculateNumber('SUBTRACT', 2.4, 2.2)).to.equal(0)
            })
            it('unequal positive numbers after rounding', () => {
                expect(calculateNumber('SUBTRACT', 7.8, 4.3)).to.equal(4)
            })
            it('negative numbers', () => {
                expect(calculateNumber('SUBTRACT', -13.5, -6.7)).to.equal(-6)
            })
            it('when a is greater than b', () => {
                expect(calculateNumber('SUBTRACT', 14.0, 7.0)).to.equal(7)
            })
            it('when b is greater than a', () => {
                expect(calculateNumber('SUBTRACT', 13.5, 16.7)).to.equal(-3)
            })
        }),
    describe('type === "DIVIDE"', () => {
        it("b is 0", () => {
            expect(calculateNumber('DIVIDE', 9.5, 0)).to.equal('Error')
        })
        it("a and b are positive", () => {
            expect(calculateNumber('DIVIDE', 1.5, 0.5)).to.equal(2)
        })
        it("a and b are both positive whole numbers", () => {
            expect(calculateNumber('DIVIDE', 3, 4)).to.equal(0.75)
        })
        it('positive number and number rounded up to 0', () => {
            expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
        });

        it('negative number and 0', () => {
            expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
        });
        it('0 and 0', () => {
            expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
        });
    })
})