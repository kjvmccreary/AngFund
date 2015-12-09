/**
 * Created by Kevin on 11/30/2015.
 */

'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:"red"};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder='name';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: 1449268498819,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: "Bob Smith",
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives in Angular.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: "John Doe",
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a close look at scopes..',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved Controllers',
                    creatorName: "Jane Doe",
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything in Angular.',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount ++;
        }
        $scope.downVoteSession = function(session) {
            if (session.upVoteCount > 0) {
                session.upVoteCount --;
            }
        }
    }

);