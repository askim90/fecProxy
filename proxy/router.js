const router = require('express').Router();
const controller = require('./controller.js');

router.route('/loadProductDescription')
  .get(controller.getProductDescription);

router.route('/loadRelatedProducts')
  .get(controller.getRelatedProducts);

router.route('/loadQandA')
  .get(controller.getQandA);

router.route('/related')
  .get(controller.getRPdata);

router.route('/product')
  .get(controller.getPDdata);

router.route('/question')
  .get(controller.getQuestions);

router.route('/answer')
  .get(controller.getAnswers);

module.exports = router;