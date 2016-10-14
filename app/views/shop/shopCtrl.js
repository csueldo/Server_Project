angular.module("myApp")
.controller("shopCtrl", function( $scope ){

  $scope.darkCases = darkCases;
  $scope.lightCases = lightCases;
  $scope.docks = docks;
  $scope.speakers = speakers;
  $scope.stands = stands;
  $scope.cups = cups;
});

var darkCases = [
  {
    "title": "iPhone Wallet Case" ,
    "price": "$129" ,
    "case": "/images/shop/cases/1-cases.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover.jpg" ,
  } ,
  {
    "title": "Walnut & Leather Case" ,
    "price": "$109" ,
    "case": "/images/shop/cases/1-cases2.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover2.jpg" ,
  } ,
  {
    "title": "Walnut Case" ,
    "price": "$99" ,
    "case": "/images/shop/cases/1-cases3.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover3.jpg" ,
  } ,
  {
    "title": "Walnut Bumper" ,
    "price": "$59" ,
    "case": "/images/shop/cases/1-cases4.jpg" ,
    "hover": "/images/shop/caseshover/1-caseshover4.jpg" ,
  }
];
/*-------------------second row cases ---------*/
var lightCases = [
  {
    "title": "iPhone Wallet Case" ,
    "price": "$129" ,
    "case": "/images/shop/cases/2-cases.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover.jpg" ,
  } ,
  {
    "title": "Maple & Leather Case" ,
    "price": "$109" ,
    "case": "/images/shop/cases/2-cases2.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover2.jpg" ,
  } ,
  {
    "title": "Maple Case" ,
    "price": "$99" ,
    "case": "/images/shop/cases/2-cases3.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover3.jpg" ,
  } ,
  {
    "title": "Maple Bumper" ,
    "price": "$59" ,
    "case": "/images/shop/cases/2-cases4.jpg" ,
    "hover": "/images/shop/caseshover/2-caseshover4.jpg" ,
  }
];
/*-------------------Docks---------------------*/
var docks = [
  {
    "title": "Walnut Dock" ,
    "price": "$99" ,
    "dock": "/images/shop/docks/1-docks.jpg" ,
    "hover": "/images/shop/docks/1-dockshover.jpg" ,
  } ,
  {
    "title": "Maple Dock" ,
    "price": "$99" ,
    "dock": "/images/shop/docks/1-docks2.jpg" ,
    "hover": "/images/shop/docks/1-dockshover2.jpg" ,
  } ,
  {
    "title": "Limited Edition Dock" ,
    "price": "$149" ,
    "dock": "/images/shop/docks/1-docks3.jpg" ,
    "hover": "/images/shop/docks/1-dockshover3.jpg" ,
  }
];
/*-------------------Speakers---------------------*/
var speakers = [
  {
    "title": "Walnut Speakers & Amp" ,
    "price": "$599" ,
    "speaker": "/images/shop/speakers/1-speakers.jpg" ,
  } ,
  {
    "title": "Maple Speakers & Amp" ,
    "price": "$499" ,
    "speaker": "/images/shop/speakers/1-speakers2.jpg" ,
  }
];
/*-------------------Stands---------------------*/
var stands = [
  {
    "title": "Walnut Monitor Stand" ,
    "price": "$119" ,
    "stand": "/images/shop/stands/1-walnutstand.jpg" ,
    "hover": "/images/shop/stands/1-walnutstand-hover.jpg" ,
  } ,
  {
    "title": "Walnut Macbook Dock" ,
    "price": "$79" ,
    "stand": "/images/shop/stands/1-walnutstand2.jpg" ,
    "hover": "/images/shop/stands/1-walnutstand-hover2.jpg" ,
  } ,
  {
    "title": "Walnut Laptop Stand" ,
    "price": "$139" ,
    "stand": "/images/shop/stands/1-walnutstand3.jpg" ,
    "hover": "/images/shop/stands/1-walnutstand-hover3.jpg" ,
  }
];
/*--------------------WALNUT CUPS ---------------------*/
var cups = [
  {
    "title": "Walnut Pen Cup" ,
    "price": "$139" ,
    "cup": "/images/shop/cups/1-cups.jpg" ,
  } ,
  {
    "title": "Walnut Dish" ,
    "price": "$29" ,
    "cup": "/images/shop/cups/1-cups2.jpg" ,

  } ,
  {
    "title": "Walnut Planter" ,
    "price": "$29" ,
    "cup": "/images/shop/cups/1-cups3.jpg" ,

  } ,
  {
    "title": "Walnut Planter" ,
    "price": "$39" ,
    "cup": "/images/shop/cups/1-cups4.jpg" ,

  } ,
  {
    "title": "Walnut Lamp Radio" ,
    "price": "$99" ,
    "cup": "/images/shop/cups/1-cups5.jpg" ,

  }
];
