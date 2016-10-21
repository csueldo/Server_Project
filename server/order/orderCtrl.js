const Order = require('./Order.js');

module.exports = {

  createOrder(req, res){
    Cart.findById(req.params.id, (err, cart) =>{
      new Order(cart).save((err, order) => {
        if(err){
          return res.status(500).json(err);
        }else {
          return res.status(200).json(order);
        }
      })
    });
  } ,

  getOrders(req, res) {
    Order.find( {}, (err, orders) =>{
      if(err){
        return res.status(500).json(err);
      }
      return res.status(200).json(orders);
    })
  }
};
