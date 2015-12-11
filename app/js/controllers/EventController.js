/**
 * Created by Kevin on 11/30/2015.
 */

'use strict';

eventsApp.controller('EventController',
    function EventController($scope,eventData, $log, $anchorScroll) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:"red"};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder='name';

        eventData.getEvent()
            .$promise
            .then(function(event) {$scope.event = event; })
            .catch(function(response) {console.log(response);}
        );

        $scope.upVoteSession = function(session) {
            session.upVoteCount ++;
        }
        $scope.downVoteSession = function(session) {
            if (session.upVoteCount > 0) {
                session.upVoteCount --;
            }
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }

);