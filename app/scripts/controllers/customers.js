(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name fatturaApp.controller:CustomersController
   * @description
   * # CustomersController
   * Controller of the fatturaApp
   */
  angular
  .module('fatturaApp')
  .controller('CustomersController', CustomersController);

  CustomersController.$inject = ['customersPrepServices'];

  /* @ngInject */
  function CustomersController(customersPrepServices) {
    var customersVm = this;

    customersVm.customers = customersPrepServices;


    // activate();
    //
    // function activate() {
    //
    // }
  }
})();
