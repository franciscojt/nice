console.log('js ready');
var appModule = angular.module('pFactory',[]);

appModule.factory('productFactory', function(){
	//use tiFixed for the price
	var products = [];
	
	var factory ={};
	
	factory.addProduct=function(product,callback){
		product.price = parseFloat(product.price);
		product.qty = 50;
		products.push(product);
		callback(products);
		console.log(product);
	};
	
	factory.delProduct = function(index){
		if(index === 0){
			products.shift();
		}
		else if(index===products.length-1){
			products.pop();
		}
		else {products.splice(index, 1);} //splice method removes a range of items from array.
		
	};
	
	factory.getProducts = function(callback){
		callback(products);
	};
	
	factory.buyProduct = function(index, callback){
		if(products[index].qty <2){
			factory.delProduct(index);
		}
		else{products[index].qty -=1;}
		callback(products);
	};
	return factory;
});

appModule.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){
	$scope.products=[];
	
	
	productFactory.getProducts(function(products){
		$scope.products = products;
	});
	
	//add to array
	$scope.addProduct = function(){
		console.log("adding product");
		productFactory.addProduct($scope.nProduct, function(products){
			$scope.products = products;
		});
		$scope.nProduct={};
	};
	
	//removes
	$scope.delProduct = function(index){
		productFactory.delProduct(index,function(products){
			$scope.products = products;
		});
	};
	
	
}]);

appModule.controller('orderControllers', ['$scope', 'productFactory', function($scope, productFactory){
	
	productFactory.getProducts(function(products){
		$scope.products = products;
	});
	
	$scope.buyProduct = function(index){
	productFactory.buyProduct(index, function(products){
		$scope.products = products;
	});
	};
}]);
	