const cartCtrl = require('./cartCtrl.js');

module.exports = app => {
  app.post('/api/cart', cartCtrl.createCart);
  app.put('/api/cart/:id', cartCtrl.addToCart);
}
