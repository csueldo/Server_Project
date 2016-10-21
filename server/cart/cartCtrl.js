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
  //put
  addToCart(req, res){
    Cart.findById(req.params.id, function( err, cart ) {
      if(err) { return res.json(err)}
      else {
        cart.products.push( req.body );
        cart.save( function( error, cartYo ) {
          if(error) {return res.status(500).json(error)}
          else{return res.status( 200 ).json( cartYo );}
        } );
      }
    })
  } ,
  //Get items in cart
  getCart(req, res){
  Cart.findById(req.params.id, function(err, cart){
    if(err){
      return res.json(err);
    }
    return res.status(200).json(cart);
  })
  }

};
