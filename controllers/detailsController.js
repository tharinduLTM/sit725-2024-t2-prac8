let detailsModel = require('../models/detailsModel');

const postDetails = (req, res) => {
    let details = req.body;
    detailsModel.postDetails(details, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

const getLastDetail = (req, res) => {
    detailsModel.getLastDetail((err, result) => {
        if (!err && result.length > 0) {
            res.json({ statusCode: 200, data: result[0], message: 'Last detail fetched successfully' });
        } else {
            res.json({ statusCode: 404, message: 'No details found' });
        }
    });
}

module.exports = { postDetails, getLastDetail };
