angular.module('main.models', ['ngResource'])

.factory('customer', function($resource) {
	return $resource('https://goritec.com:8100/customer/:id');
})

.factory('invoice', function($resource) {
	return $resource('https://goritec.com:8100/invoice/:id');
})

.factory('detail', function($resource) {
	return $resource('https://goritec.com:8100/detail/:id');
});