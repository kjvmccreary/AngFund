/**
 * Created by Kevin on 12/12/2015.
 */
'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope,$cookieStore,$cookies) {
        $scope.event = {id:1,name:"My Event"};

        var now = new Date(),
        // this will set the expiration to 12 months
            exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
        $cookies.put('someToken','blabla',{
            expires: exp
        });

        var cookie = $cookies.get('someToken');
        console.log(cookie);
        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event',event);
        };

        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        }

        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
        }
    }
);
