angular.module('IMDB.factory')
.service('IMDB', ['$http', function($http) {
	var self = this;
	
	$http.get('data/movies.json').then(function(response){
		self.moviesList = response.data || [];
	});

	self.queryByTitle = function(title, callback){
		$http.get("http://www.omdbapi.com?t="+ title +"&y=&plot=full&r=json").then(function(response){
			callback(response);
		});
	};
}]);






