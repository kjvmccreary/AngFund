/**
 * Created by Kevin on 11/30/2015.
 */

'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
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
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives in Angular.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: "John Doe",
                    duration: '30 min',
                    level: 'Introductory',
                    abstract: 'This session will take a close look at scopes..',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved Controllers',
                    creatorName: "Jane Doe",
                    duration: '2 hrs',
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