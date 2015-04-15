var app = angular.module("quoteBook");
app.controller("mainCtrl", function($scope, mainService){
	$scope.getQuotes = function(){
		$scope.quotes = mainService.getData();
	};
	$scope.getQuotes();

	$scope.addQuotes = function(){
		var addObj = {text:$scope.inputBox, author:"Jacob"};
		$scope.quotes = mainService.addData(addObj);
	};

	$scope.removeQuotes = function(){
		mainService.removeData($scope.inputBox);
	};

});