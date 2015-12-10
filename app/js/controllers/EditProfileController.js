/**
 * Created by Kevin on 12/9/2015.
 */

'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};
        $scope.testClick = function () {
            window.alert("it was clicked");
        }
        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }

    }
);