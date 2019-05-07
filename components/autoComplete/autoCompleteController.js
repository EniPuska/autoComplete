app = angular.module('autoCompeteApp', ['ui.bootstrap']);
app.factory('liveSearchService', ['$http', function($http) {
    var factory = {};
    factory.getCountries = function(input, searchValue) {
        return $http.post('/autoComplete',{"input":input});
    }
    return factory;
}]);
app.controller('autoCompleteController', ['$scope','$http', 'liveSearchService', function($scope,$http, liveSearchService) {
    
    $scope.searchCountries = function(viewValue, searchValue) {
        return liveSearchService.getCountries(viewValue, searchValue).then(function(response) {
            return response.data.response.map(function(item) {
                if(response.data.status == 200)
            	    return item.name;
            });
        });
    };    
}]);

