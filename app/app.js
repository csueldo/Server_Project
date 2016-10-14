angular.module( "myApp", [ 'ui.router' ] )

.config(function( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home' ,
    templateUrl: '../views/home/home.html'
  })
  .state('shop', {
    url: '/shop' ,
    templateUrl: '../views/shop/shop.html' ,
    controller: 'shopCtrl'
  })
  .state('about', {
    url: '/about' ,
    templateUrl: '../views/about/about.html' ,
    controller: 'aboutCtrl'
  })
  .state('journal', {
    url: '/journal' ,
    templateUrl: '../views/journal/journal.html'
  });

});
