'use strict';

//var eventsApp = angular.module('eventsApp', ['ngSanitize']);
var eventsApp = angular.module('eventsApp', ['ngResource','ngSanitize'])
    .factory('myCache',function($cacheFactory) {
        return $cacheFactory('myCache',{capacity:3})
    });

