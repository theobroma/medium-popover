'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../models/product');

var _product2 = _interopRequireDefault(_product);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _authenticate2.default, function (req, res) {
  _user2.default.find({ _id: req.decodedId }).then(function (user) {
    var cart = user[0].cart;
    res.send(cart);
    /*    Product.find()
          .where('_id')
          .in(['587a68ddb33d051a0c7c03d8', '587a68ddb33d051a0c7c03d9'])
          .exec((err, records) => {
            res.send(cart);
          });*/
  });
});

// Убрать дубли товаров
/*router.post('/', authenticate, (req, res) => {
  User.findByIdAndUpdate(req.decodedId,
    { $push: { cart: {
      productId: req.body.productId,
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.body.thumbnail
    } } },
    { safe: true, upsert: true })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});*/

router.post('/', _authenticate2.default, function (req, res) {
  _user2.default.findByIdAndUpdate(req.decodedId, { $set: { cart: req.body } }, { safe: true, upsert: true })
  /*.then(() => res.json({ success: true }))*/
  .then(function (data) {
    return res.send(req.body);
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

router.delete('/', _authenticate2.default, function (req, res) {
  _user2.default.findByIdAndUpdate(req.decodedId, { $set: { cart: [] } }).then(function () {
    return res.json({ success: true });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

router.delete('/:productId', _authenticate2.default, function (req, res) {
  _user2.default.findByIdAndUpdate(req.decodedId, { $pull: { cart: { productId: req.params.productId } } }, { safe: true }).then(function () {
    return res.json({ success: true });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

exports.default = router;
//# sourceMappingURL=cart.js.map