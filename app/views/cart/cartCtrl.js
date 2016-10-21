angular.module('myApp')
  .controller('cartCtrl', function($scope, cartService){
    //retreive cart data in cart view
    $scope.products;


    function getCart(){
      cartService.getCart()
      .then(function(response){
        $scope.products=response.data.products;
        console.log(response.data.products)
      })
    }
    getCart();
    console.log($scope.products);

    //adding product to new cart array create cart need to know if a cart is already created
    // $scope.addToCart = function(product){
    //
    //   cartService.addToCart(product)
    //   .then(function(response){
    //     console.log(response);
    //   });
    // }

  });
