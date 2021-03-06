// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#0099CC');
      //StatusBar.hide();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.customers', {
      url: '/customers',
      views: {
        'menuContent': {
          templateUrl: 'templates/customers.html',
          controller: 'CustomersCtrl'
        }
      }
    })
    
 .state('app.customer', {
    url: '/customers/:customerId',
    views: {
      'menuContent': {
        templateUrl: 'templates/customer_view.html',
        controller: 'CustomerCtrl'
      }
    }
  })
  
    .state('app.invoices', {
      url: '/invoices',
      views: {
        'menuContent': {
          templateUrl: 'templates/invoices.html',
          controller: 'InvoicesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/invoices/:invoiceId',
    views: {
      'menuContent': {
        templateUrl: 'templates/invoice.html',
        controller: 'InvoiceCtrl'
      }
    }
  })
  
  .state('app.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/config.html',
        controller: 'ConfigCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/invoices');
});
