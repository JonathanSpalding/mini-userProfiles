//var userProfiles = angular.module(userProfiles);
//
//userProfiles.controller("MainController", function($scope) {
//
//});

angular.module("userProfiles").controller("ctrl", function($scope, service){
   $scope.users = service.getUsers();
});