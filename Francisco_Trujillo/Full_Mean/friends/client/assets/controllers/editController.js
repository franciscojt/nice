'use strict'
app.controller('editController', ['$scope','friendsFactory',  '$location', '$routeParams', function($scope, friendsFactory, $location, rParams) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */
	friendsFactory.show(rParams.id, function(friend){
		$scope.friend = friend
		$scope.friend.birthday = new Date($scope.friend.birthday)
		console.log($scope.friend, "show returned")
	});
	
	$scope.edit = function(){
		friendsFactory.update($scope.friend,rParams.id);
			$location.url('/');
		};
	
	
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
}]);
//var friends = require('./newController.js');
////console.log(friends, "editController")
//
//app.controller('editController', ['$scope', 'friendsFacrtory', '$location', function($scope, friendsFactory, $location){
//	
//	$scope.show = function($index){
//		$scope.friend = friends($index);
//		$location.url('#/show');
//	};
//}]);