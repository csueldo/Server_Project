const Cart = require('./Cart.js');

module.exports = {

  //Post
  createCart(req, res){
    Cart.create(req.body, (err, cart) =>{
      if(err){
        return res.status(500).json(error);
      }
        return res.status(200).json(cart);
    })
  } ,
  addToCart(req, res){
    Cart.findByIdAndUpdate(req.params.id, req.body, (err, updatedCart)=>{
      if(err){
        return res.status(500).json(error);
      }
      return res.status(200).json(updatedCart);
    })
  }
};
