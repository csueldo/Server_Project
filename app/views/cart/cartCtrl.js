angular.module('myApp')
  .controller('cartCtrl', function($scope, cartService){
    //retreive cart data in cart view
    $scope.products;
    $scope.total = 0;


    function getCart(){
      cartService.getCart()
      .then(function(response){
        $scope.products=response.data.products;
        console.log(response.data.products)
        getTotalPrice();
      })
    }
    getCart();
    console.log($scope.products);

    function getTotalPrice(){
      for(var i = 0; i < $scope.products.length; i ++){
        $scope.total += parseInt($scope.products[i].price);
      }
    }

    //adding product to new cart array create cart need to know if a cart is already created
    // $scope.addToCart = function(product){
    //
    //   cartService.addToCart(product)
    //   .then(function(response){
    //     console.log(response);
    //   });
    // }

  });
