

let detailsModel = require('../models/detailsModel');


const postDetails = (req, res) => {
    let details = req.body;
    detailsModel.postDetails(details, (err, result) => {
        if (!err) {
            res.json({
                statusCode: 201,
                data: {
                    acknowledged: result.acknowledged,
                    insertedId: result.insertedId,
                    firstName: details.firstName,      // Include first name
                    lastName: details.lastName,        // Include last name
                    currentState: details.currentState // Include current state
                },
                message: 'success'
            });
        } else {
            res.json({ statusCode: 500, message: 'Internal Server Error' });
        }
    });
};


// const postDetails = (req, res) => {
//     let details = req.body;
//     detailsModel.postDetails(details, (err, result) => {
//         if (!err) {
//             res.status(201).json({ statusCode: 201, data: result, message: 'success' });
//         } else {
//             res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
//         }
//     });
// }

const getLastDetail = (req, res) => {
    detailsModel.getLastDetail((err, result) => {
        if (!err && result.length > 0) {
            res.status(200).json({ statusCode: 200, data: result[0], message: 'Last detail fetched successfully' });
        } else {
            res.status(404).json({ statusCode: 404, message: 'No details found' });
        }
    });
}

module.exports = { postDetails, getLastDetail };
