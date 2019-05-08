app = angular.module('autoCompeteApp', ['ui.bootstrap']);
app.factory('liveSearchService', ['$http', function($http) {
    var factory = {};
    factory.getCountries = function(input, searchValue) {
        return $http.post('/autoComplete',{"input":input});
    }
    return factory;
}]);
app.controller('autoCompleteController', ['$scope','$http', 'liveSearchService', function($scope,$http, liveSearchService) {
    $scope.tabletVersion = false;
    $scope.mobileVersion = false;
    $(window).resize(function(){
        $scope.$apply(function(){
          if(window.innerWidth <= 770) {
            $scope.tabletVersion = true;
          } else {
            $scope.tabletVersion = false;
          }
          if(window.innerWidth <= 480) {
            $scope.mobileVersion = true;
          } else {
            $scope.mobileVersion = false;
          }
        });
    });
    $scope.searchCountries = function(viewValue, searchValue) {
        return liveSearchService.getCountries(viewValue, searchValue).then(function(response) {
            return response.data.response.map(function(item) {
                if(response.data.status == 200)
            	    return item.name;
            });
        });
    };    
}]);

