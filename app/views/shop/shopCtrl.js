angular.module("myApp")
.controller("shopCtrl", function( $scope ){

  $scope.darkCases = darkCases;
  $scope.lightCases = lightCases;
  $scope.docks = docks;
  $scope.speakers = speakers;
});

var darkCases = [
  {
    "case": "/images/shop/cases/1-cases.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover.jpg" ,
  } ,
  {
    "case": "/images/shop/cases/1-cases2.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover2.jpg" ,
  } ,
  {
    "case": "/images/shop/cases/1-cases3.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover3.jpg" ,
  } ,
  {
    "case": "/images/shop/cases/1-cases4.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover4.jpg" ,
  }
];
/*-------------------second row cases ---------*/
var lightCases = [
  {
    "case": "/images/shop/cases/2-cases.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover.jpg" ,
  } ,
  {
    "case": "/images/shop/cases/2-cases2.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover2.jpg" ,
  } ,
  {
    "case": "/images/shop/cases/2-cases3.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover3.jpg" ,
  } ,
  {
    "case": "/images/shop/cases/2-cases4.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover4.jpg" ,
  }
];
/*-------------------Docks---------------------*/
var docks = [
  {
    "dock": "/images/shop/docks/1-docks.jpg" ,
    "hover": "/images/shop/docks/1-dockshover.jpg" ,
  } ,
  {
    "dock": "/images/shop/docks/1-docks2.jpg" ,
    "hover": "/images/shop/docks/1-dockshover2.jpg" ,
  } ,
  {
    "dock": "/images/shop/docks/1-docks3.jpg" ,
    "hover": "/images/shop/docks/1-dockshover3.jpg" ,
  }
];
/*-------------------Docks---------------------*/
var speakers = [
  {
    "speaker": "/images/shop/speakers/1-speakers.jpg" ,
  } ,
  {
    "speaker": "/images/shop/speakers/1-speakers2.jpg" ,
  }
];
