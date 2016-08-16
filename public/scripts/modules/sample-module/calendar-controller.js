define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('CalendarCtrl', ['$scope', function ($scope) {
       $scope.test='Hello World';
    }]);
});