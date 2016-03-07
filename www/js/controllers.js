angular.module('starter.controllers', ['main.models', 'main.services'])

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
// customers get all
.controller('CustomersCtrl', function($scope, customer) {
    var query = customer.get(function() {
        $scope.customers = query.customer;
    });
    // reload
    $scope.doRefresh = function() {
        var query = customer.get(function() {
            $scope.customers = query.customer;
        });
        console.log('Incoming todo ' + Date.now());
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply()
    };
})
// customer get
.controller('CustomerCtrl', function($scope, customer, $stateParams) {
    var query = customer.get({ id: $stateParams.customerId }, function() {
        //console.log(JSON.stringify(query.customer[0]));
        $scope.customer = query.customer[0];
    });
})
// invoices get all
.controller('InvoicesCtrl', function($scope, invoice) {
    var query = invoice.get(function() {
        $scope.invoices = query.invoice;
    });
    // reload
    $scope.doRefresh = function() {
        var query = invoice.get(function() {
            $scope.invoices = query.invoice;
        });
        console.log('Incoming todo ' + Date.now());
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply()
    };
})
// invoice get
.controller('InvoiceCtrl', function($scope, invoice, detail, $stateParams) {
    var query = invoice.get({ id: $stateParams.invoiceId }, function() {
        $scope.invoice = query.invoice[0];
    });
    // get detail
    var detail = detail.get({ id: $stateParams.invoiceId }, function() {
        $scope.details = detail.detail;
    });
})
// load settings
.controller('ConfigCtrl', function($scope, customer, formatter) {
    console.log("hola..."+formatter.md5('jctovar@gmail.com'));
    var entry = customer.get({ id: '1' }, function() {
        console.log(JSON.stringify(entry));
    });
});
