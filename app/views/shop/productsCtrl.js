angular.module("myApp")
.controller("productsCtrl", function( $scope, productsService){


  productsService.getProducts()
  .then( response =>{
    $scope.allProducts = response.data;
    console.log($scope.allProducts);

    for ( let i = 0; i < $scope.allProducts.length; i++) {
      for (var property in $scope.allProducts[i]){
        if ($scope.allProducts[i][property] === "Case") {
          for (var property in $scope.allProducts[i]){
            if ($scope.allProducts[i][property] === "Walnut") {
              darkCases.push($scope.allProducts[i]);
            }
          }
        }
      }
    }
    for ( let i = 0; i < $scope.allProducts.length; i++) {
      for (var property in $scope.allProducts[i]){
        if ($scope.allProducts[i][property] === "Case") {
          for (var property in $scope.allProducts[i]){
            if ($scope.allProducts[i][property] === "Maple") {
              lightCases.push($scope.allProducts[i]);
            }
          }
        }
      }
    }
    for ( let i = 0; i < $scope.allProducts.length; i++) {
      for (var property in $scope.allProducts[i]){
        if ($scope.allProducts[i][property] === "Dock") {
          docks.push($scope.allProducts[i]);
        }
      }
    }
    for ( let i = 0; i < $scope.allProducts.length; i++) {
      for (var property in $scope.allProducts[i]){
        if ($scope.allProducts[i][property] === "Speakers") {
          speakers.push($scope.allProducts[i]);
        }
      }
    }
    for ( let i = 0; i < $scope.allProducts.length; i++) {
      for (var property in $scope.allProducts[i]){
        if ($scope.allProducts[i][property] === "Stand") {
          stands.push($scope.allProducts[i]);
        }
      }
    }
    for ( let i = 0; i < $scope.allProducts.length; i++) {
      for (var property in $scope.allProducts[i]){
        if ($scope.allProducts[i][property] === "Cup") {
          cups.push($scope.allProducts[i]);
        }
      }
    }
  }).catch( err => {
    console.log(err);
    });

  $scope.darkCases = darkCases;
  $scope.lightCases = lightCases;
  $scope.docks = docks;
  $scope.speakers = speakers;
  $scope.stands = stands;
  $scope.cups = cups;

});

var darkCases = [
  // {
  //   "title": "iPhone Wallet Case" ,
  //   "price": "$129" ,
  //   "image": "/images/shop/cases/1-cases.jpg" ,
  //   "imageHover": "/images/shop/caseshover/1-caseshover.jpg" ,
  //   "ui":"walnut-wallet" ,
  // } ,
  // {
  //   "title": "Walnut & Leather Case" ,
  //   "price": "$109" ,
  //   "image": "/images/shop/cases/1-cases2.jpg" ,
  //   "imageHover": "/images/shop/caseshover/1-caseshover2.jpg" ,
  //   "ui": "walnut-leather" ,
  // } ,
  // {
  //   "title": "Walnut Case" ,
  //   "price": "$99" ,
  //   "image": "/images/shop/cases/1-cases3.jpg" ,
  //   "imageHover": "/images/shop/caseshover/1-caseshover3.jpg" ,
  //   "ui": "walnut-case" ,
  // } ,
  // {
  //   "title": "Walnut Bumper" ,
  //   "price": "$59" ,
  //   "image": "/images/shop/cases/1-cases4.jpg" ,
  //   "imageHover": "/images/shop/caseshover/1-caseshover4.jpg" ,
  //   "ui": "walnut-bumper" ,
  // }
];
/*-------------------second row cases ---------*/
var lightCases = [
  // {
  //   "title": "iPhone Wallet Case" ,
  //   "price": "$129" ,
  //   "image": "/images/shop/cases/2-cases.jpg" ,
  //   "imageHover": "/images/shop/caseshover/2-caseshover.jpg" ,
  //   "ui":"maple-wallet" ,
  // } ,
  // {
  //   "title": "Maple & Leather Case" ,
  //   "price": "$109" ,
  //   "image": "/images/shop/cases/2-cases2.jpg" ,
  //   "imageHover": "/images/shop/caseshover/2-caseshover2.jpg" ,
  //   "ui":"maple-leather" ,
  // } ,
  // {
  //   "title": "Maple Case" ,
  //   "price": "$99" ,
  //   "image": "/images/shop/cases/2-cases3.jpg" ,
  //   "imageHover": "/images/shop/caseshover/2-caseshover3.jpg" ,
  //   "ui":"maple-case" ,
  // } ,
  // {
  //   "title": "Maple Bumper" ,
  //   "price": "$59" ,
  //   "image": "/images/shop/cases/2-cases4.jpg" ,
  //   "imageHover": "/images/shop/caseshover/2-caseshover4.jpg" ,
  //   "ui":"maple-bumper" ,
  // }
];
/*-------------------Docks---------------------*/
var docks = [
  // {
  //   "title": "Walnut Dock" ,
  //   "price": "$99" ,
  //   "image": "/images/shop/docks/1-docks.jpg" ,
  //   "imageHover": "/images/shop/docks/1-dockshover.jpg" ,
  //   "ui":"walnut-dock" ,
  // } ,
  // {
  //   "title": "Maple Dock" ,
  //   "price": "$99" ,
  //   "image": "/images/shop/docks/1-docks2.jpg" ,
  //   "imageHover": "/images/shop/docks/1-dockshover2.jpg" ,
  //   "ui":"maple-dock" ,
  // } ,
  // {
  //   "title": "Limited Edition Dock" ,
  //   "price": "$149" ,
  //   "image": "/images/shop/docks/1-docks3.jpg" ,
  //   "imageHover": "/images/shop/docks/1-dockshover3.jpg" ,
  //   "ui":"limited-dock" ,
  // }
];
/*-------------------Speakers---------------------*/
var speakers = [
  // {
  //   "title": "Walnut Speakers & Amp" ,
  //   "price": "$599" ,
  //   "image": "/images/shop/speakers/1-speakers.jpg" ,
  //   "ui":"walnut-speaker" ,
  // } ,
  // {
  //   "title": "Maple Speakers & Amp" ,
  //   "price": "$499" ,
  //   "image": "/images/shop/speakers/1-speakers2.jpg" ,
  //   "ui":"maple-speaker" ,
  // }
];
/*-------------------Stands---------------------*/
var stands = [
  // {
  //   "title": "Walnut Monitor Stand" ,
  //   "price": "$119" ,
  //   "image": "/images/shop/stands/1-walnutstand.jpg" ,
  //   "imageHover": "/images/shop/stands/1-walnutstand-hover.jpg" ,
  //   "ui":"walnut-monitor-stand" ,
  // } ,
  // {
  //   "title": "Walnut Macbook Dock" ,
  //   "price": "$79" ,
  //   "image": "/images/shop/stands/1-walnutstand2.jpg" ,
  //   "imageHover": "/images/shop/stands/1-walnutstand-hover2.jpg" ,
  //   "ui":"walnut-macbook-dock" ,
  // } ,
  // {
  //   "title": "Walnut Laptop Stand" ,
  //   "price": "$139" ,
  //   "image": "/images/shop/stands/1-walnutstand3.jpg" ,
  //   "imageHover": "/images/shop/stands/1-walnutstand-hover3.jpg" ,
  //   "ui":"walnut-laptop-stand" ,
  // }
];
/*--------------------WALNUT CUPS ---------------------*/
var cups = [
  // {
  //   "title": "Walnut Pen Cup" ,
  //   "price": "$139" ,
  //   "image": "/images/shop/cups/1-cups.jpg" ,
  //   "imageHover": "/images/shop/cups/1-cups.jpg" ,
  //   "ui":"pen-cup" ,
  // } ,
  // {
  //   "title": "Walnut Dish" ,
  //   "price": "$29" ,
  //   "image": "/images/shop/cups/1-cups2.jpg" ,
  //   "imageHover": "/images/shop/cups/1-cups2.jpg" ,    "ui":"dish-cup" ,
  // } ,
  // {
  //   "title": "Walnut Planter" ,
  //   "price": "$29" ,
  //   "image": "/images/shop/cups/1-cups3.jpg" ,
  //   "imageHover": "/images/shop/cups/1-cups3.jpg" ,
  //   "ui":"smallplanter-cup" ,
  // } ,
  // {
  //   "title": "Walnut Tall Planter" ,
  //   "price": "$39" ,
  //   "image": "/images/shop/cups/1-cups4.jpg" ,
  //   "imageHover": "/images/shop/cups/1-cups4.jpg" ,
  //   "ui":"tallplanter-cup" ,
  // } ,
  // {
  //   "title": "Walnut Lamp Radio" ,
  //   "price": "$99" ,
  //   "image": "/images/shop/cups/1-cups5.jpg" ,
  //   "imageHover": "/images/shop/cups/1-cups5.jpg" ,
  //   "ui":"lamp-cup" ,
  // }
];
