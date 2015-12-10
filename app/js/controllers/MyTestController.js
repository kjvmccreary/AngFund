/**
 * Created by Kevin on 12/9/2015.
 */
'use strict';

eventsApp.controller('MyTestController',
    function MyTestController($scope) {
        $scope.testClick = function() {
            alert("this controller works");
        }
    }
);