angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CustomersCtrl', function($scope, $http) {
    // load all invoices
    $http({
        method: 'GET',
        url: 'https://goritec.com:8100/customer'
    })
    .then(function success(response) {
        console.log(JSON.stringify(response.data.customer));
        $scope.customers = response.data.customer;
    }, function error(response) {
        alert("Error de conexion...!");
    });
})

.controller('CustomerCtrl', function($scope, $http, $stateParams) {
    console.log($stateParams.customerId);
    // load invoice
    $http({
        method: 'GET',
        url: 'https://goritec.com:8100/customer/' + $stateParams.customerId
    })
    .then(function success(response) {
        console.log(JSON.stringify(response.data.customer[0]));
        $scope.invoice = response.data.customer[0];
    }, function error(response) {
        alert("Error de conexion...!");
    });
})

.controller('PlaylistsCtrl', function($scope, $http) {
    // load all invoices
    $http({
        method: 'GET',
        url: 'https://goritec.com:8100/invoice'
    })
    .then(function success(response) {
        //console.log(JSON.stringify(response.data.invoice));
        $scope.playlists = response.data.invoice;
    }, function error(response) {
        alert("Error de conexion...!");
    });
})

.controller('PlaylistCtrl', function($scope, $http, $stateParams) {
    // load invoice
    $http({
        method: 'GET',
        url: 'https://goritec.com:8100/invoice/' + $stateParams.playlistId
    })
    .then(function success(response) {
        console.log(JSON.stringify(response.data.invoice[0]));
        $scope.invoice = response.data.invoice[0];
    }, function error(response) {
        alert("Error de conexion...!");
    });
});


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}