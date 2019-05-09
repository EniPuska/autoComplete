app = angular.module('autoCompeteApp', ['ui.bootstrap']);

app.factory('liveSearchService', ['$http', function($http) {
  var factory = {};
  factory.getCountries = function(input) {
    let requestTimeout = {
      timeout: 3000
    };
    return $http.post('/autoComplete',{"input":input},{ cache: true},requestTimeout);
  }
  return factory;
}]);

app.controller('autoCompleteController', ['$scope','$window','liveSearchService', function($scope,$window,liveSearchService) {
  $scope.tabletVersion = false;
  $scope.mobileVersion = false;
  $scope.checkAutoCompleteResponseArray = true;
  $scope.cachedArray = [];
  $(window).resize(function(){
      if($window.innerWidth <= 770) {
        $scope.tabletVersion = true;
      } else {
        $scope.tabletVersion = false;
      }
      if($window.innerWidth < 480){
        $scope.mobileVersion = true;
      } else {
        $scope.mobileVersion = false;
      }
      $scope.$digest();
  });
  
  $scope.searchCountries = function(viewValue, searchValue) {
    return liveSearchService.getCountries(viewValue, searchValue).then(function(response) {
      if(response.data.response.length > 0) {
        return response.data.response.map(function(item) {
          if(response.data.status == 200) {
            $scope.checkAutoCompleteResponseArray = false;
            return item.name;
          } 
        });
      } else {
        $scope.checkAutoCompleteResponseArray = true;
      }
    });
  }

  $scope.onSelect = function ($item,key,value) {
    $scope.$item = $item;
    $scope.checkAutoCompleteResponseArray = false;
  }
  
}]);

