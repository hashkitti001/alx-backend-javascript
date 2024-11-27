const { expect } = require('chai')
const request = require('request')

describe('API integration test', () => {

    const API_URL = 'http://localhost:7865'

    it('Get / returns correct response', (done) => {
        request.get(API_URL, (err, res, body) => {
            expect(res.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Welcome to the payment system')
            done()
        })

    })
})