const assert = require("assert")
const calculateNumber = require("./ 0-calcul")
describe("calculateNumber tests", () => {
    it("check if inputs are numbers", () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3)
    })
    it("rounds down a's floating point representation", () => {
        assert.strictEqual(calculateNumber(3.55, 4), 8)
    })
    it("rounds down b's floating point representation", () => {
        assert.strictEqual(calculateNumber(3, 4.858), 8)
    })
    it("rounds down both a and b", () => {
        assert.strictEqual(calculateNumber(2.67, 9.94), 13)
    })
})