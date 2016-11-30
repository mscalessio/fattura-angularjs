(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name fatturaApp.database
   * @description
   * # database
   * Factory in the fatturaApp.
   */
  angular.module('fatturaApp')
    .factory('database', database);

  database.$inject = ['$http', '$log'];

  function database($http, $log) {

    var DB_URL = 'http://localhost:3000/';

    var service = {
      getOptions: getOptions,
      getCompany:   getCompany,
      getCustomers: getCustomers,
      getCustomer:  getCustomer,
      getInvoices:  getInvoices,
      getInvoice:   getInvoice,
      saveInvoice:  saveInvoice,
      deleteInvoice: deleteInvoice,
      saveCustomer: saveCustomer,
      updateCustomer: updateCustomer,
      deleteCustomer: deleteCustomer,
      updateOptions: updateOptions
    };

    return service;

    ///////////////////////////////

    function getOptions() {
      return $http.get(DB_URL + 'options')
        .then(successCallback)
        .catch(errorCallback);
    }

    function getCompany() {
      return $http.get(DB_URL + 'company')
        .then(successCallback)
        .catch(errorCallback);
    }

    function getCustomers() {
      return $http.get(DB_URL + 'customers')
        .then(successCallback)
        .catch(errorCallback);
    }

    function getCustomer(id) {
      return $http.get(DB_URL + 'customers/' + id)
        .then(successCallback)
        .catch(errorCallback);
    }

    function getInvoices() {
      return $http.get(DB_URL + 'invoices')
        .then(successCallback)
        .catch(errorCallback);
    }

    function getInvoice(id) {
      return $http.get(DB_URL + 'invoices/' + id)
        .then(successCallback)
        .catch(errorCallback);
    }

    function saveInvoice(data) {
      return $http.post(DB_URL + 'invoices', data)
        .then(successCallback)
        .catch(errorCallback);
    }

    function deleteInvoice(id) {
      return $http.delete(DB_URL + 'invoices/' + id)
        .then(successCallback)
        .catch(errorCallback);
    }

    function saveCustomer(data) {
      return $http.post(DB_URL + 'customers', data)
        .then(successCallback)
        .catch(errorCallback);
    }

    function updateCustomer(id, data) {
      return $http.put(DB_URL + 'customers/' + id, data)
        .then(successCallback)
        .catch(errorCallback);
    }

    function deleteCustomer(id) {
      return $http.delete(DB_URL + 'customers/' + id)
        .then(successCallback)
        .catch(errorCallback);
    }

    function updateOptions(data) {
      return $http.post(DB_URL + 'options', data)
        .then(successCallback)
        .catch(errorCallback);
    }

    function successCallback(response) {
      return response.data;
    }

    function errorCallback(error) {
      $log.error(error);
      // $log.error('XHR Failed for updateOptions. ' + error.data);
    }

  }

})();
