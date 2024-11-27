const { spy, stub } = require('sinon')
const {expect} = require('chai')
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber function and logs the correct output', () => {
        const stalker = spy(console)
        const dummy = stub(Utils, 'calculateNumber')
        
        dummy.returns(10)
        sendPaymentRequestToApi(100, 20)
        expect(dummy.calledWith('SUM', 100, 20)).to.be.true
        expect(dummy.callCount).to.be.equal(1)
        expect(stalker.log.calledWith('The total is: 10')).to.be.true
        expect(stalker.log.callCount).to.be.equal(1)
        dummy.restore()
        stalker.log.restore()
    })
})
