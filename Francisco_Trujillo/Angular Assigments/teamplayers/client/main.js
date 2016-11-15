console.log('js ready');
var appModule = angular.module('appModule',['ngRoute']);
//routing
appModule.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: './partials/players.html',
		
	})
	.when('/teams',{
		templateUrl: './partials/teams.html',
		
	})
	.when('/associations',{
		templateUrl: './partials/associations.html',
	})
	.otherwise({
		redirecTo: '/'
	});
});
// factory
appModule.factory('playerFactory', function(){
	var players = [{name: "francisco"}];
	var factory = [];
	
	factory.getPlayer = function(callback){
		callback(players);
	};
	
	factory.addPlayer = function(player, callback){
		players.push(player);
		callback(players);
	};
	
	factory.delPlayer = function(index){
		players.splice(index, 1);
	};
	return factory;
});

appModule.factory('teamFactory', function(){
	var teams = [];
	var factory = [];
	
	factory.getTeam = function(callback){
		callback(teams);
	};
	
	factory.addTeam = function(team, callback){
		teams.push(team);
		callback(teams);
	};
	
	factory.delTeam = function(index){
		teams.splice(index, 1);
	};
	return factory;
});

appModule.factory('assoFactory', function(){
	var assos = [];
	var factory = [];
	
	factory.getAsso = function(callback){
		callback(assos);
	};
	
	factory.addAsso = function(asso, callback){
		assos.push(asso);
		callback(assos);
	};
	
	factory.delAsso = function(index){
		assos.splice(index, 1);
	};
	return factory;
});

//controller
appModule.controller('PlayersController', ['$scope','playerFactory',function($scope, playerFactory){
	$scope.Players = [];
	
	
	playerFactory.getPlayer(function(players){
		$scope.players = players;

	});
		
	$scope.addPlayer = function(){
		playerFactory.addPlayer($scope.nPlayer, function(players){
			$scope.players = players;
		});
		$scope.nPlayer={};
	};
	
	$scope.delPlayer = function(index){
		playerFactory.delPlayer(index);
	

	};
	
	
}]);

appModule.controller('TeamsController', ['$scope','teamFactory',function($scope, teamFactory){
	$scope.teams=[];
	
	
	teamFactory.getTeam(function(teams){
		$scope.teams = teams;
	});
	
		
	$scope.addTeam = function(){
		teamFactory.addTeam($scope.nTeam, function(teams){
			$scope.players = teams;
		});
		$scope.nTeam={};
	};
	
	$scope.delTeam = function(index){
		teamFactory.delTeam(index);
	

	};
}]);

appModule.controller('AssociationsController', ['$scope','assoFactory','teamFactory', 'playerFactory',function($scope, assoFactory, teamFactory, playerFactory){
	$scope.assos=[]; //assos = associations
	$scope.nAsso = {};
	
	playerFactory.getPlayer(function(players){
			$scope.players = players;
		});
	teamFactory.getTeam(function(teams){
			$scope.teams = teams;
		});
	assoFactory.getAsso(function(assos){
		$scope.assos = assos;
	});

		
	$scope.addAsso = function(){
		assoFactory.addAsso($scope.nAsso, function(assos){
			$scope.assos = assos;
		});
		$scope.nAsso={};
	};
	
	$scope.delAsso = function(index){
		assoFactory.delAsso(index);
	

	};
	

	

}]);


