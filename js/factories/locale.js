(function () {
    'use strict';

    /*global angular, moment */
    angular
        .module('LocaleService', [])
        .factory('locale', function () {
            var localeID;

            function getLocaleID() {
                return localeID || navigator.language || navigator.userLanguage;
            }

            function initLocale(id) {
                moment.locale(id);
            }

            initLocale(getLocaleID());

            return {
                getLocaleID: getLocaleID, // As in BCP 47
                setLocaleID: function (val) {
                    localeID = val;
                    initLocale(val);
                }
            };
        });
}());
