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
    templateUrl: '../views/shop/shop.html'
  })
  .state('about', {
    url: '/about' ,
    templateUrl: '../views/about/about.html'
  })
  .state('journal', {
    url: '/journal' ,
    templateUrl: '../views/journal/journal.html'
  });

});
