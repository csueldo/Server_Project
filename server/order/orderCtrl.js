const Order = require('./Order.js') ,
  Product = require('../products/Product.js') ,
  Cart = require('../cart/Cart.js') ,

module.exports = {

  createOrder(req, res){
    Cart.findById(req.params.cartId, (err, user) =>{
      const newOrder = {
        cart: cart._id ,
        products: cart.products
      };
      new Order(newOrder).save((err, order) => {
        if(err){
          return res.status(500).json(err);
        }else {
          cart.products = [];
          cart.save();
          cart.orders.push(order._id);
          cart.save();
          return res.status(200).json(order);
        }
      })
    });
  } ,

  getOrders(req, res) {
    Order.find(req.Query), (err, orders) =>{
      if(err){
        return res.status(500).json(err);
      }
      return res.status(200).json(orders);
    });
  }
};
