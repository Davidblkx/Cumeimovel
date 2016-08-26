/// <reference path="../ref.d.ts" />
var app;
(function (app) {
    var test;
    (function (test) {
        'use strict';
        angular.module('app.test', []).controller('TestController', ['$scope', function TestController($scope) {
                $scope.message = 'Angularjs is working!';
            }]);
    })(test = app.test || (app.test = {}));
})(app || (app = {}));
