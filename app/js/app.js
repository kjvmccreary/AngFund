'use strict';

//var eventsApp = angular.module('eventsApp', ['ngSanitize']);
var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute','ngSanitize']) //,'ngCookies']) removed after lesson on cookies.
    .config(function($routeProvider){
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller:'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl:'templates/EventList.html',
                controller:'EventListController'
            });
    });

