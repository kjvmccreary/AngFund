/**
 * Created by Kevin on 12/8/2015.
 */

'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.saveEvent = function(event,newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                window.alert("Record saved here.");
            }
        }
        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        }
    }
);