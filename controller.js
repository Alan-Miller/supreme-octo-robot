angular.module('directiveApp')
.controller('mainController', function($scope) {
  $scope.pageTitle = "Brett's cool web page";

  $scope.myFunc = function(msg) {
    alert(msg);
  }
})
