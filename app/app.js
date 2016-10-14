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
    templateUrl: '../views/journal/journal.html' ,
  })
  /*------------product views ---------------*/
  .state('walnut-wallet', {
    url:'/walnut-wallet' ,
    templateUrl: '../views/product/cases/walnut-wallet.html' ,
  })
  .state('walnut-leather', {
    url:'/walnut-leather' ,
    templateUrl: '../views/product/cases/walnut-leather.html' ,
  })
  .state('walnut-case', {
    url:'/walnut-case' ,
    templateUrl: '../views/product/cases/walnut-case.html' ,
  })
  .state('walnut-bumper', {
    url:'/walnut-bumper' ,
    templateUrl: '../views/product/cases/walnut-bumper.html' ,
  })
  .state('maple-wallet', {
    url:'/maple-wallet' ,
    templateUrl: '../views/product/cases/maple-wallet.html' ,
  })
  .state('maple-leather', {
    url:'/maple-leather' ,
    templateUrl: '../views/product/cases/maple-leather.html' ,
  })
  .state('maple-case', {
    url:'/maple-case' ,
    templateUrl: '../views/product/cases/maple-case.html' ,
  })
  .state('maple-bumper', {
    url:'/maple-bumper' ,
    templateUrl: '../views/product/cases/maple-bumper.html'
  })
  /*---------------products views DOCKS ----------*/
  .state('walnut-dock', {
    url:'/walnut-dock' ,
    templateUrl: '../views/product/docks/walnut-dock.html' ,
  })
  .state('maple-dock', {
    url:'/maple-dock' ,
    templateUrl: '../views/product/docks/maple-dock.html' ,
  })
  .state('limited-dock', {
    url:'/limited-dock' ,
    templateUrl: '../views/product/docks/limited-dock.html'
  })
  /*----------------products views Speakers----------*/
  .state('walnut-speaker', {
    url:'/walnut-speaker' ,
    templateUrl: '../views/product/speakers/walnut-speaker.html' ,
  })
  .state('maple-speaker', {
    url:'/maple-speaker' ,
    templateUrl: '../views/product/speakers/maple-speaker.html'
  })
  /*------------------poducts views Stands --------*/
  .state('walnut-monitor-stand', {
    url:'/walnut-monitor-stand' ,
    templateUrl: '../views/product/stands/walnut-monitor-stand.html' ,
  })
  .state('walnut-macbook-dock', {
    url:'/walnut-macbook-dock' ,
    templateUrl: '../views/product/stands/walnut-macbook-dock.html' ,
  })
  .state('walnut-laptop-stand', {
    url:'/walnut-laptop-stand' ,
    templateUrl: '../views/product/stands/walnut-laptop-stand.html'
  })
  /*---------------products view Cups ---------*/
  .state('pen-cup', {
    url:'/pen-cup' ,
    templateUrl: '../views/product/cups/pen-cup.html' ,
  })
  .state('dish-cup', {
    url:'/dish-cup' ,
    templateUrl: '../views/product/cups/dish-cup.html' ,
  })
  .state('smallplanter-cup', {
    url:'/smallplanter-cup' ,
    templateUrl: '../views/product/cups/smallplanter-cup.html' ,
  })
  .state('tallplanter-cup', {
    url:'/tallplanter-cup' ,
    templateUrl: '../views/product/cups/tallplanter-cup.html' ,
  })
  .state('lamp-cup', {
    url:'/lamp-cup' ,
    templateUrl: '../views/product/cups/lamp-cup.html'
  })
});
