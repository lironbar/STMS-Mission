'use strict';
angular.
module('movieDetail').
component('movieDetail', {
	templateUrl: 'movie-detail/movie-detail.html',
	controller: ['$routeParams','$rootScope', '$scope','$localStorage', 'IMDB', 
	function movieCtrl($routeParams, $rootScope, $scope, $localStorage, IMDB) {

		$scope.loading = $rootScope.loading = true;
		$scope.movieTitle = $routeParams.movieTitle;

		// get movie info
		IMDB.queryByTitle($routeParams.movieTitle, function(response){
			$scope.movie = response.data || {};
			$scope.loading = $rootScope.loading = false;
		});

		// get movie comments from localstorage
		$scope.comments = JSON.parse(localStorage.getItem('comments') || '{}');
		// if there are no comments for the movie, initiliaze the comments array
		if (!$scope.comments[$scope.movieTitle])
			$scope.comments[$scope.movieTitle] = [];		

		// point to the movie comments array in the comment object
		$scope.movieComments = $scope.comments[$scope.movieTitle];

		// add comment
		$scope.addComment = function(theName, theComment) {
			if($scope.theName != "" && $scope.theComment != "") {
				var newComment = {'id':Math.random() ,'name': theName, 'comment': theComment};
				$scope.movieComments.push(newComment);
				localStorage.setItem('comments', JSON.stringify($scope.comments));
				$scope.theName = "";
				$scope.theComment = "";
			}
		};

		// remove comment
		$scope.remComment = function($index) {
			$scope.movieComments.splice($index, 1);
			localStorage.setItem('comments', JSON.stringify($scope.comments));
		};
	}]
});