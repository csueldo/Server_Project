angular.module( 'myApp' )
  .controller( 'mainCtrl', function( $scope, $rootScope, $anchorScroll ) {

    $rootScope.$on( '$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams, options) {
      event.preventDefault();

      $anchorScroll('top');

    } )

  } );
