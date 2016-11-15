console.log('js ready')
var appModule = angular.module('pFactory',[]);

appModule.factory('productFactory', function(){
	//use tiFixed for the price
	var products = [];
	
	var factory ={};
	
	factory.addProduct=function(product,callback){
		product.price = parseFloat(product.price);
		products.push(product);
		callback(products)
		console.log(product)
	};
	
	factory.delProduct = function(index, callback){
		if(index === 0){
			products.shift();
		}
		else if(index===products.length-1){
			products.pop();
		}
		else {products.splice(index, 1);}; //splice method removes a range of items from array.
		callback(products)
	}
	
	factory.getProducts = function(callback){
		callback(products);
	};
	return factory;
});

appModule.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){
	$scope.products=[];
	$scope.test="test"
	
	productFactory.getProducts(function(products){
		$scope.products = products;
	});
	
	//add to array
	$scope.addProduct = function(){
		console.log("adding product")
		productFactory.addProduct($scope.nProduct, function(products){
			$scope.products = products;
		});
		$scope.nProduct={};
	};
	
	//removes
	$scope.delProduct = function(index){
		productFactory.delProduct(index,function(products){
			$scope.products = products;
		})
	

	};
}]);