app = angular.module('autoCompeteApp', ['ui.bootstrap']);
app.factory('liveSearchService', ['$http', function($http) {
    var factory = {};
    factory.getCustomers = function(input, searchValue) {
        if(searchValue == 'address'){
            return  $http.post('/autoComplete');
        }
        else if(searchValue == 'area'){
            return  $http.post('/orderapi/specific-customers/',{"criteria": { "area":input},"limit": 10, "fields":"area,address"});
        }
        else{
            console.log('Error in autocomplete');
        }
    }
    return factory;
}]);
app.controller('autoCompleteController', ['$scope','$http', 'liveSearchService', function($scope,$http, liveSearchService) {
    $scope.search = function() {
        $http.post("/search").then(function(response){
            console.log("it works");
        });
    }
    $scope.thCustomers = function(viewValue, searchValue) {
        $scope.skata = $scope.test;
        return liveSearchService.getCustomers(viewValue, searchValue).then(function(response) {
            return response.data.map(function(item) {
            	if(searchValue == 'address')
            		return item.address;
            	else if(searchValue == 'area')
            		return item.area;
            	else
            		console.log('Error in live Search');
            });
        });

    };    
}]);

