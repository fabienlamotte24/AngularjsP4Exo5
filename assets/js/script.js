var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
  $scope.showMe = function(){
    $scope.text = true;
  };
  $scope.hideMe = function(){
    $scope.text = false;
  };
});
