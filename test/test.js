const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Find your state flag', () => {
    describe('POST /api/details', () => {
        it('should return status 201 on successful details submission', (done) => {
            const details = {
                firstName: 'John',
                lastName: 'Doe',
                currentState: 'images/VIC.jpg'
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('should submit the correct first name', (done) => {
            const details = {
                firstName: 'John',
                
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(body.data.firstName).to.equal('John'); 
                done();
            });
        });

        it('should submit the correct last name', (done) => {
            const details = {
                lastName: 'Doe',
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(body.data.lastName).to.equal('Doe'); 
                done();
            });
        });

        it('should submit the correct state', (done) => {
            const details = {
                firstName: 'John',
                lastName: 'Doe',
                currentState: 'images/VIC.jpg'
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(body.data.currentState).to.equal('images/VIC.jpg'); 
                done();
            });
        });
    });

    console.log('\n');

    describe('GET /api/lastDetail', () => {
        it('should return status 200 and fetched the submitted detail', (done) => {
            request.get('http://localhost:3000/api/lastDetail', (error, response, body) => {
                const data = JSON.parse(body).data;
                expect(response.statusCode).to.equal(200);
                expect(data.firstName).to.equal('John');
                expect(data.lastName).to.equal('Doe');
                expect(data.currentState).to.equal('images/VIC.jpg');
                done();
            });
        });
    });
});





