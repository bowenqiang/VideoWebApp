(function(){
    'use strict';
    let app = angular.module('myApp', []);
    app.config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(false).hashPrefix('');
        $routeProvider
        .when("/",{
            templateUrl : "app/home/index.html",
            controller : "homeController",
            controllerAs : "home"
        })
        .when("/admin",{
            templateUrl : "app/admin/index.html",
            controller : "adminController",
            controllerAs : "admin"
        })
        .otherwise({
            template: "<h1>None</h1><p>The page you are looking for is not exist anymore or haven't been created yet.</p>"
        })
    });


}());