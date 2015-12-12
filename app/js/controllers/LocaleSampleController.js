/**
 * Created by Kevin on 12/12/2015.
 */
'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController ($scope, $locale) {

        console.log($locale);
        console.log($scope);

        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
    }
);