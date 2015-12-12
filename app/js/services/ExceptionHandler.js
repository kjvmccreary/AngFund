/**
 * Created by Kevin on 12/12/2015.
 */

'use strict';

eventsApp.factory('$exceptionHandler', function() {
    return function (exception) {
        console.log('custom exception handled: ' + exception.message);
    };
});