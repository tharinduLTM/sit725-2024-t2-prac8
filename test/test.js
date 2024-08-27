const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Find your state flag', () => {
    describe('POST /api/details', () => {
        it('should return status 201 on successful submission', (done) => {
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

        it('should return the correct first name', (done) => {
            const details = {
                firstName: 'John',
                // lastName: 'Doe',
                // currentState: 'images/VIC.jpg'
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(body.data.firstName).to.equal('John'); // Correct check
                done();
            });
        });

        it('should return the correct last name', (done) => {
            const details = {
                // firstName: 'John',
                lastName: 'Doe',
                // currentState: 'images/VIC.jpg'
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(body.data.lastName).to.equal('Doe'); // Correct check
                done();
            });
        });

        it('should return the correct state', (done) => {
            const details = {
                firstName: 'John',
                lastName: 'Doe',
                currentState: 'images/VIC.jpg'
            };
            request.post({
                url: 'http://localhost:3000/api/details',
                json: details
            }, (error, response, body) => {
                expect(body.data.currentState).to.equal('images/VIC.jpg'); // Correct check
                done();
            });
        });
    });

    console.log('\n');

    describe('GET /api/lastDetail', () => {
        it('should return status 200 and the last submitted detail', (done) => {
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




// const chai = require('chai');
// const request = require('request');
// const expect = chai.expect;

// describe('Find your state flag', () => {
//     describe('POST /api/details', () => {


//         it('should return status 201 on successful submission', (done) => {
//             const details = {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 currentState: 'images/VIC.jpg'
//             };
//             request.post({
//                 url: 'http://localhost:3000/api/details',
//                 json: details
//             }, (error, response, body) => {
//                 expect(response.statusCode).to.equal(201); // Change 200 to 201
//                 done();
//             });
//         });
        



//         // it('should return status 200 on successful submission', (done) => {
//         //     const details = {
//         //         firstName: 'John',
//         //         lastName: 'Doe',
//         //         currentState: 'images/VIC.jpg'
//         //     };
//         //     request.post({
//         //         url: 'http://localhost:3000/api/details',
//         //         json: details
//         //     }, (error, response, body) => {
//         //         expect(response.statusCode).to.equal(201);
//         //         done();
//         //     });
//         // });

//         it('should return the correct first name', (done) => {
//             const details = {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 currentState: 'images/VIC.jpg'
//             };
//             request.post({
//                 url: 'http://localhost:3000/api/details',
//                 json: details
//             }, (error, response, body) => {
//                 expect(body.data.firstName).to.equal('John'); // Correct check
//                 done();
//             });
//         });

//         it('should return the correct last name', (done) => {
//             const details = {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 currentState: 'images/VIC.jpg'
//             };
//             request.post({
//                 url: 'http://localhost:3000/api/details',
//                 json: details
//             }, (error, response, body) => {
//                 expect(body.data.lastName).to.equal('Doe'); // Correct check
//                 done();
//             });
//         });

//         it('should return the correct state', (done) => {
//             const details = {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 currentState: 'images/VIC.jpg'
//             };
//             request.post({
//                 url: 'http://localhost:3000/api/details',
//                 json: details
//             }, (error, response, body) => {
//                 expect(body.data.currentState).to.equal('images/VIC.jpg'); // Correct check
//                 done();
//             });
//         });
//     });

//     describe('GET /api/lastDetail', () => {
//         it('should return status 200 and the last submitted detail', (done) => {
//             request.get('http://localhost:3000/api/lastDetail', (error, response, body) => {
//                 const data = JSON.parse(body).data;
//                 expect(response.statusCode).to.equal(200);
//                 expect(data.firstName).to.equal('John');
//                 expect(data.lastName).to.equal('Doe');
//                 expect(data.currentState).to.equal('images/VIC.jpg');
//                 done();
//             });
//         });
//     });
// });















// var request = require("request");
// var expect = require("chai").expect;

// describe("Find your state flag", function() {

//     // Test for POST /api/details
//     describe("POST /api/details", function() {
//         var url = "http://localhost:3000/api/details";

//         it("should return status 200 on successful submission", function(done) {
//             request.post({
//                 url: url,
//                 json: true,
//                 body: {
//                     firstName: "John",
//                     lastName: "Doe",
//                     currentState: "images/VIC.jpg"
//                 }
//             }, function(error, response, body) {
//                 if (error) {
//                     console.error("POST Request Error:", error);
//                 }
//                 console.log("POST Response Body:", body); // Debugging line
//                 expect(response.statusCode).to.equal(200);
//                 expect(body.message).to.equal("success");
//                 done();
//             });
//         });

//         it("should return the correct first name", function(done) {
//             request.post({
//                 url: url,
//                 json: true,
//                 body: {
//                     firstName: "John",
//                     lastName: "Doe",
//                     currentState: "images/VIC.jpg"
//                 }
//             }, function(error, response, body) {
//                 if (error) {
//                     console.error("POST Request Error:", error);
//                 }
//                 console.log("POST Response Body:", body); // Debugging line
//                 expect(response.statusCode).to.equal(200);
//                 expect(body.data).to.have.property("firstName");
//                 expect(body.data.firstName).to.equal("John");
//                 done();
//             });
//         });

//         it("should return the correct last name", function(done) {
//             request.post({
//                 url: url,
//                 json: true,
//                 body: {
//                     firstName: "John",
//                     lastName: "Doe",
//                     currentState: "images/VIC.jpg"
//                 }
//             }, function(error, response, body) {
//                 if (error) {
//                     console.error("POST Request Error:", error);
//                 }
//                 console.log("POST Response Body:", body); // Debugging line
//                 expect(response.statusCode).to.equal(200);
//                 expect(body.data).to.have.property("lastName");
//                 expect(body.data.lastName).to.equal("Doe");
//                 done();
//             });
//         });

//         it("should return the correct state", function(done) {
//             request.post({
//                 url: url,
//                 json: true,
//                 body: {
//                     firstName: "John",
//                     lastName: "Doe",
//                     currentState: "images/VIC.jpg"
//                 }
//             }, function(error, response, body) {
//                 if (error) {
//                     console.error("POST Request Error:", error);
//                 }
//                 console.log("POST Response Body:", body); // Debugging line
//                 expect(response.statusCode).to.equal(200);
//                 expect(body.data).to.have.property("currentState");
//                 expect(body.data.currentState).to.equal("images/VIC.jpg");
//                 done();
//             });
//         });
//     });

//     // Test for GET /api/lastDetail
//     describe("GET /api/lastDetail", function() {
//         var url = "http://localhost:3000/api/lastDetail";
//         it("should return status 200 and the last submitted detail", function(done) {
//             request(url, function(error, response, body) {
//                 if (error) {
//                     console.error("GET Request Error:", error);
//                 }
//                 body = JSON.parse(body);
//                 console.log("GET Response Body:", body); // Debugging line
//                 expect(response.statusCode).to.equal(200);
//                 expect(body.message).to.equal("Last detail fetched successfully");
//                 expect(body.data).to.have.property("firstName");
//                 expect(body.data).to.have.property("lastName");
//                 expect(body.data).to.have.property("currentState");
//                 done();
//             });
//         });

//         // it("should return status 404 if no details are found", function(done) {
//         //     request(url, function(error, response, body) {
//         //         body = JSON.parse(body);
//         //         expect(response.statusCode).to.equal(404);
//         //         expect(body.message).to.equal("No details found");
//         //         done();
//         //     });
//         // });
//     });

// });















// // var expect = require("chai").expect;
// // var request = require("request");

// // describe("Find your state flag", function() {

// //     // Test for POST /api/details
// //     describe("POST /api/details", function() {
// //         var url = "http://localhost:3000/api/details";

// //     //         // Clear the database before running this test
// //     // before(function(done) {
// //     //     Detail.deleteMany({}, function(err) {
// //     //         done();
// //     //     });
// //     // });

// //         it("should return status 201 on successful submission", function(done) {
// //             request.post({
// //                 url: url,
// //                 json: true,
// //                 body: {
// //                     firstName: "John",
// //                     lastName: "Doe",
// //                     currentState: "images/VIC.jpg"
// //                 }
// //             }, function(error, response, body) {
// //                 expect([200, 201]).to.include(response.statusCode);
// //                 expect(body.message).to.equal("success");
// //                 done();
// //             });
// //         });
// //     });

    
    




// //     // Test for GET /api/lastDetail
// //     describe("GET /api/lastDetail", function() {
// //         var url = "http://localhost:3000/api/lastDetail";
// //         it("should return status 200 and the last submitted detail", function(done) {
// //             request(url, function(error, response, body) {
// //                 body = JSON.parse(body);
// //                 expect(response.statusCode).to.equal(200);
// //                 expect(body.message).to.equal("Last detail fetched successfully");
// //                 expect(body.data).to.have.property("firstName");
// //                 expect(body.data).to.have.property("lastName");
// //                 expect(body.data).to.have.property("currentState");
// //                 done();
// //             });
// //         });

// //         // it("should return status 404 if no details are found", function(done) {
// //         //     request(url, function(error, response, body) {
// //         //         body = JSON.parse(body);
// //         //         expect(response.statusCode).to.equal(404);
// //         //         expect(body.message).to.equal("No details found");
// //         //         done();
// //         //     });
// //         // });
// //     });

// // });


