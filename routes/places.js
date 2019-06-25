var express = require('express');
var router = express.Router();

var places_controller = require('../controllers/places');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', places_controller.test);

router.post('/create', places_controller.places_create);

router.get('/:id', places_controller.places_details);

router.put('/:id/update', places_controller.places_update);

router.delete('/:id/delete', places_controller.places_delete);


module.exports = router;