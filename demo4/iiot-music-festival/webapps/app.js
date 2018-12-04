var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'restRoomCtrl',
			templateUrl: 'views/restroom.html'
		})
		.when('/merchCarts', {
			controller: 'merchCartCtrl',
			templateUrl: 'views/merchCart.html'
		})
		.when('/food', {
			controller: 'foodCtrl',
			templateUrl: 'views/food.html'
		})
		.when('/merchTeam', {
			controller: 'merchTeamCtrl',
			templateUrl: 'views/merchTeam.html'
		})
		.when('/paramedics', {
			controller: 'paramedicsCtrl',
			templateUrl: 'views/paramedics.html'
		}).
		when('/security', {
			controller: 'securityCtrl',
			templateUrl: 'views/security.html'
		})
});
