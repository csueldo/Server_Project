angular.module('myApp')
  .factory('cartService', function($http, ref){
    return{
      postCart: function(product){
        return $http.post(`${ref.url}/api/cart`);
      },
      addToCart: function(product){
        return $http.put(`${ref.url}/api/cart/580a559471b7851ac1ae3352`, product)
      },
      getCart: function(){
        return $http.get(`${ref.url}/api/cart/580a559471b7851ac1ae3352`)
      }
    }
  });

//580a539a3b8b5c1a84e0acd4
//580a53a2de88531a8933c2af
//580a556141225d1a99f037cc
//580a559471b7851ac1ae3352
//582d433635a38ed9068e051d
