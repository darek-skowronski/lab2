var myApp = angular.module('myApp', [
    'ui.router'
]);

myApp.config(function($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    }).state({
        name: 'form',
        url: '/form',
        templateUrl: 'templates/form.html',
        controller: 'formCtrl'
    });
});

myApp.controller('homeCtrl', function($scope, $http) {
    $scope.data = [];
    $scope.firstname = "";
    $scope.lastname = "";
    
    $http.get('/data.json').then(function(res) {
       $scope.data = res.data.json; 
    });
});

myApp.controller('formCtrl', function($scope) {
    $scope.firstname = "";
    $scope.lastname = "";
    $scope.email = "";
    
    $scope.action = function() {
        alert("Witaj " + $scope.firstname + " " + $scope.lastname + ". Twój adres e-mail to: " + $scope.email);
    }
});