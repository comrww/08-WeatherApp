(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', '$q'];

    function weatherFactory($http, $q) {

        var service = {
            getWeather: getWeather
        };

        return service;

        ///////////

        function getWeather(cityID) {
            var deferred = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&units=imperial&APPID=515c669ce57e7843ae55d8ed03579eef').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                }
            );

            return deferred.promise;
        }
    }

})();
