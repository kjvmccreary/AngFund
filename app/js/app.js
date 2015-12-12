'use strict';

//var eventsApp = angular.module('eventsApp', ['ngSanitize']);
var eventsApp = angular.module('eventsApp', ['ngResource','ngSanitize']) //,'ngCookies']) removed after lesson on cookies.
    .factory('myCache',function($cacheFactory) {
        return $cacheFactory('myCache',{capacity:3})
    });

