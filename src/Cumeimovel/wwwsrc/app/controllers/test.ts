/// <reference path="../ref.d.ts" />

namespace app.test {
    'use strict'

    interface testScope extends ng.IScope {
        message: string;
    }

    angular.module('app.test', []).controller('TestController', ['$scope', function TestController($scope: testScope) {
        $scope.message = 'Angularjs is working!';
    }]);
}