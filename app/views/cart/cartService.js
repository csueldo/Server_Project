angular.module('myApp')
  .factory('cartService', function($http, ref){
    return{
      postCart: function(product){
        return $http.post(`${ref.url}/api/cart`);
      },
      addToCart: function(product){
        return $http.put(`${ref.url}/api/cart/580a35dd87d17515aeb1fe25`, product)
      },
      getCart: function(){
        return $http.get(`${ref.url}/api/cart/580a35dd87d17515aeb1fe25`)
      }
    }
  });
