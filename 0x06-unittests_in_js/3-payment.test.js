const { spy } = require('sinon')
const {expect} = require('chai')
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber function in Utils well', () => {
        const stalker = spy(Utils)

        sendPaymentRequestToApi(100, 200)
        expect(stalker.calculateNumber.calledWith('SUM', 100, 200)).to.be.true
        expect(stalker.calculateNumber.callCount).to.be.equal(1)
        stalker.calculateNumber.restore()
    })
})
