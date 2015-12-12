/**
 * Created by Kevin on 12/12/2015.
 */
'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        var promise = $timeout(function() {
            $scope.name = "Kevin McCreary";
            $scope.status = "Timeout completed."
        },3000);

        //setTimeout(function() {
        //    $scope.name = "Kevin McCreary";
        //    $scope.status = "Timeout completed."
        //},3000);

        $scope.cancel = function() {
            $timeout.cancel(promise);
            $scope.status = "Timeout canceled."
        };


    }
);