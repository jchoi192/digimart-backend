var express = require('express');
var router = express.Router();
var listingsCtrl = require('../controllers/listings')



router.get('/', listingsCtrl.index);
router.post('/', listingsCtrl.create);
router.put('/:id', listingsCtrl.update)
router.delete('/:id', listingsCtrl.delete)

module.exports = router;
