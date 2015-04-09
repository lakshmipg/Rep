//The main angular module, 
var testapp=angular.module('testapp',['ngRoute','pageCtrl', 'PageCtrlOne', 'PageCtrlTwo']); //',
//Providing routing
 testapp.config(function($routeProvider){
$routeProvider.when('/page1',{templateUrl: './page1.html',controller:'controller1'});
$routeProvider.when('/page2',{templateUrl: './page2.html',controller:'controller2'});
$routeProvider.when('/home',{templateUrl: './home.html',controller:'crtl'});
$routeProvider.otherwise({redirectTo:'/home'});
});
