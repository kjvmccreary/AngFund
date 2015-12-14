/**
 * Created by Kevin on 12/12/2015.
 */
'use strict';

eventsApp.controller('EventsListController',
    function EventListController($scope){
        $scope.events = eventData.getAllEvents();
    }
);