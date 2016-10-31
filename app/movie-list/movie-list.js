'use strict';
angular.
module('movieList').
component('movieList', {
  templateUrl: 'movie-list/movie-list.html',
  controller: ['$http', '$scope', '$localStorage', 'IMDB', function mainCtrl($http, $scope, $localStorage, IMDB) {
  	// set initial table order value
    $scope.orderProp = 'id';

    $scope.$watch(function() {return IMDB.moviesList}, function(nVal,oVal) {
      $scope.moviesList = nVal;
    });
  }]
});