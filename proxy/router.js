const router = require('express').Router();
const controller = require('./controller.js');

router.route('/loadProductDescription')
  .get(controller.getProductDescription);

router.route('/loadRelatedProducts')
  .get(controller.getRelatedProducts);

router.route('/related')
  .get(controller.getRPdata);

router.route('/product')
  .get(controller.getPDdata);

module.exports = router;