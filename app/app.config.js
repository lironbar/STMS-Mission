angular.
	module('IMDB-App').
		config(['$locationProvider', '$routeProvider',
			function config($locationProvider, $routeProvider) {
				$locationProvider.hashPrefix('!');

				$routeProvider.
				when ('/movies', {
					template: '<movie-list></movie-list>'
				}).
				when ('/movies/:movieTitle', {
					template: '<movie-detail></movie-detail>'
				}).
				otherwise({redirectTo: '/movies'});
			}
		]);