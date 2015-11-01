(function () {
    'use strict';

    /*global angular, moment */
    angular
        .module('TestCtrl', ['LocaleService'])
        .controller('TestCtrl', [ '$scope', 'locale', function ($scope, locale) {
            var localeData;

            locale.setLocaleID('fi');
            localeData = moment.localeData();

            $scope.localeID = locale.getLocaleID();
            $scope.today = moment().format('L');

            // Code for datepicker:

            $scope.dt = new Date();

            $scope.disabled = function (date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            };

            $scope.toggleMin = function () {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
            $scope.toggleMin();
            $scope.maxDate = new Date(2020, 5, 22);

            /*jslint unparam: true */
            $scope.open = function ($event) {
                $scope.status.opened = true;
            };
            /*jslint unparam: false */

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.status = {
                opened: false
            };

            // Important:

            $scope.datepickerPopup = localeData.longDateFormat('L');
        }]);
}());
