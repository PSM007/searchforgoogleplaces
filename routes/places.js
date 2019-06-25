var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var places_controller = require('../controllers/places');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', places_controller.test);


router.post('/create', places_controller.product_create);

router.get('/:id', places_controller.product_details);

router.put('/:id/update', places_controller.product_update);

router.delete('/:id/delete', places_controller.product_delete);


module.exports = router;