angular.module("myApp")
  .factory('productsService', function($http, ref) {
    return {
      getProducts: function () {
      return $http.get(`${ref.url}/api/products`);
      }
    }
  });
