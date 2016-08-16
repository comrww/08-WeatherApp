(function(){
	'use strict';

	angular
		.module('myApp')
		.controller('WeatherController', WeatherController);

		WeatherController.$inject = ['weatherFactory']

		function WeatherController(weatherFactory){
			var vm = this;

			vm.searchHistory = [];
			
			vm.searchInput = '';

			vm.inputResults = inputResults

			function inputResults(city) {

			weatherFactory.getWeather(city).then(
				function(data) {
					console.log(data)
					vm.place = data;
					vm.searchHistory.push({
						"city": vm.searchInput,
						"time": new date().getTime()
					})
				},
				function(error) {

				}
			);}

		}
})();

