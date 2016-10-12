angular.module( "myApp", [ 'ui.router' ] )

.config(function( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state ('home', {
    url: '/home' ,
    templateUrl: '../index.html'
  }) ,
  .state ('shop', {
    url: '/shop' ,
    parent: 'home' ,
    templateUrl: '../views/shop/shop.html'
  });

});
