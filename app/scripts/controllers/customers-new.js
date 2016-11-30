(function() {
  'use strict';

  /**
  * @ngdoc function
  * @name fatturaApp.controller:CustomersNewCtrl
  * @description
  * # CustomersNewCtrl
  * Controller of the fatturaApp
  */
  angular
  .module('fatturaApp')
  .controller('CustomersNewController', CustomersNewController);

  CustomersNewController.$inject = ['database', '$location'];

  /* @ngInject */
  function CustomersNewController(database, $location) {
    var customerNewVm = this;

    var customer = {
      name: '',
      address: '',
      cap: '',
      city: '',
      state: '',
      vat_id: '',
      tax_code: ''
    };

    customerNewVm.customer = customer;
    customerNewVm.saveCustomer = saveCustomer;


    function saveCustomer(isValid) {
      if (isValid) {
        database.saveCustomer(customerNewVm.customer).then(function(data) {
          if (data.id) {
            $location.path('/customers/view' + data.id);
          }
        });
      }
    }

  }
})();
