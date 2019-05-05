app = angular.module('autoCompeteApp', []);
app.controller('autoCompleteController',function($scope,$http) {
    $scope.search = function() {
        $http.post("/search").then(function(response){
            console.log("it works");
        });
    }    
});