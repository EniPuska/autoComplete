app = angular.module('autoCompeteApp', ['ui.bootstrap']);

app.factory('liveSearchService', ['$http', function($http) {
    var factory = {};
    factory.getCountries = function(input, searchValue) {
      let requestTimeout = {
        timeout: 3000
      };
      return $http.post('/autoComplete',{"input":input},requestTimeout);
    }
    return factory;
}]);

app.controller('autoCompleteController', ['$scope','$http','$timeout','liveSearchService', function($scope,$http,$timeout,liveSearchService) {
    $scope.tabletVersion = false;
    $scope.mobileVersion = false;
    $scope.$watch('tabletVersion', function() {
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

