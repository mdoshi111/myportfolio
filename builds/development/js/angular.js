var myApp = angular.module('myPortfolio',[]);
  


myApp.controller('appController', ['$scope', function($scope) {
	var d = new Date();
	var year = d.getFullYear();	
	$scope.currentYear = year;
}]);

myApp.controller('companyInfo', ['$scope','$http', function($scope,$http) {

	$http.get("data/companyInfo.json")
    .success(function(response) {$scope.company = response;});

}]);

myApp.controller('projectDetailInfo', ['$scope','$http', function($scope,$http) {

	$http.get("data/projectdetailinformation.json")
    .success(function(response) {$scope.project = response;});

}]);

// function companyInfo($scope,$http) {
// 	$http.get("data/companyInfo.json")
//     .success(function(response) {$scope.company = response;});

// }