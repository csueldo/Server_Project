const Product = require('./Product.js');

module.exports = {
  //Get Request
  getProducts (req, res){
    Product.find( (req.query), (err, products)=>{
      if(err){
        return res.send(err);
      }
      return res.json(products);
    })
  } ,
  getThisProduct(req, res){
    Product.findById( req.params.id, (err, product)=>{
      if(err){
        return res.send(err);
      }
      return res.json(product);
    })
  } ,
  // Post Requests
  addProduct (req, res) {
  new Product(req.body).save( (err, product) => {
    if (err) {
    return res.send(err);
    }
    return res.json(product);
   })
  } ,

  //Put Requests
  editProduct (req, res) {
    if (!req.params.id) {
      return res.status(400).send("Navigate into object you want to edit");
    }
    Products.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
      if (err) {
        return res.send(err);
      }
      else {
        return res.json(response);
      }
    })
  },

  //DELETE REQUEST
  deleteProduct (req, res, next) {
    if (!req.params.id) {
      return res.status(400).send("Navigate into object you want to delete")
    }
    Products.findByIdAndRemove(req.params.id, req.body, (err, response) => {
      if (err) {
        return res.send(err);
       }
      else {
        return res.json(response);
       }
    })
  },
};
