(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name fatturaApp
   * @description
   * # fatturaApp
   *
   * Main module of the application.
   */
  angular
    .module('fatturaApp', [
      'ngAnimate',
      'ngMessages',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap'
    ])
    .config(config);

  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/fatture', {
        templateUrl: 'views/fatture.html',
        controller: 'FattureController',
        controllerAs: 'fatture',
        resolve: {
          invoicesPrepServices: invoicesPrepServices
        }
      })
      .when('/fatture/view/:id', {
        templateUrl: 'views/fatture-view.html',
        controller: 'FattureViewController',
        controllerAs: 'fattureView',
        resolve: {
          invoicePrepServices: invoicePrepServices
        }
      })
      .when('/fatture/new', {
        templateUrl: 'views/fatture-new.html',
        controller: 'FattureNewController',
        controllerAs: 'fattureNew',
        resolve: {
          optionsPrepServices: optionsPrepServices,
          companyPrepServices: companyPrepServices,
          customersPrepServices: customersPrepServices,
          invoicesPrepServices: invoicesPrepServices
        }
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersController',
        controllerAs: 'customersVm',
        resolve: {
          customersPrepServices: customersPrepServices
        }
      })
      .when('/customers/view/:id', {
        templateUrl: 'views/customers-view.html',
        controller: 'CustomersViewController',
        controllerAs: 'customerVm',
        resolve: {
          customerPrepServices: customerPrepServices
        }
      })
      .when('/customers/new', {
        templateUrl: 'views/customers-new.html',
        controller: 'CustomersNewController',
        controllerAs: 'customerNewVm'
      })
      .when('/options', {
        templateUrl: 'views/options.html',
        controller: 'OptionsController',
        controllerAs: 'optionsVm',
        resolve: {
          optionsPrepServices: optionsPrepServices
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  invoicesPrepServices.$inject = ['database'];
  function invoicesPrepServices(database) {
    return database.getInvoices();
  }

  customersPrepServices.$inject = ['database'];
  function customersPrepServices(database) {
    return database.getCustomers();
  }

  optionsPrepServices.$inject = ['database'];
  function optionsPrepServices(database) {
    return database.getOptions();
  }

  companyPrepServices.$inject = ['database'];
  function companyPrepServices(database) {
    return database.getCompany();
  }

  invoicePrepServices.$inject = ['$route', 'database'];
  function invoicePrepServices($route, database) {
    // return database.getInvoice(parseInt($route.current.params.id));
    return database.getInvoice($route.current.params.id);
  }

  customerPrepServices.$inject = ['$route', 'database'];
  function customerPrepServices($route, database) {
    // return database.getCustomer(parseInt($route.current.params.id));
    return database.getCustomer($route.current.params.id);
  }


})();
