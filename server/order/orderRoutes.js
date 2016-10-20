const orderCtrl = require('./orderCtrl.js');

module.exports = app => {
  app.post('/api/orders/:cartId', orderCtrl.createOrder);
  app.get('/api/orders', orderCtrl.getOrders);
}
