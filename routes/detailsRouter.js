let express = require('express');
let router = express.Router();
let detailsController = require('../controllers/detailsController');

router.post('/details', detailsController.postDetails);
router.get('/lastDetail', detailsController.getLastDetail);

module.exports = router;

