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
        })
        .factory('amFormatter', function () { // Angular-Moment Formatter
            var matchArr = {
                'M': 'M',
                'Mo': '',
                'MM': 'MM',
                'MMM': 'MMM',
                'MMMM': 'MMMM',
                'Q': '',
                'D': 'd',
                'Do' : '',
                'DD' : 'dd',
                'DDD' : '',
                'DDDo' : '',
                'DDDD' : '',
                'd' : '',
                'do' : '',
                'dd' : '',
                'ddd' : 'EEE',
                'dddd' : 'EEEE',
                'e' : '',
                'E' : '',
                'w' : 'w',
                'wo' : '',
                'ww' : 'ww',
                'W' : '',
                'Wo' : '',
                'WW' : '',
                'YY' : 'yy',
                'YYYY' : 'yyyy',
                'gg' : '',
                'gggg' : '',
                'GG' : '',
                'GGGG' : '',
                'A' : 'a',
                'a' : '',
                'H' : 'H',
                'HH' : 'HH',
                'h' : 'h',
                'hh' : 'hh',
                'm' : 'm',
                'mm' : 'mm',
                's' : 's',
                'ss' : 'ss',
                'S' : '',
                'SS' : '',
                'SSS' : '',
                'SSSS' : '',
                'SSSSS' : '',
                'SSSSSS' : '',
                'SSSSSSS' : '',
                'SSSSSSSS' : '',
                'SSSSSSSSS' : '',
                'z' : '',
                'zz' : '',
                'Z' : '',
                'ZZ' : 'Z',
                'X' : '',
                'x' : ''
            };

            return {
                mToA: function (momentFormat) {
                    try {
                        return momentFormat.replace(/\w+/g, function (match) {
                            var res = matchArr[match];

                            if (res === '') {
                                throw 'no conversion for token ' + match;
                            }
                            return res;
                        });
                    } catch (err) {
                        return undefined;
                    }
                }
            };
        });
}());
