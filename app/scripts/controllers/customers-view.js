(function() {
  'use strict';
  /**
  * @ngdoc function
  * @name fatturaApp.controller:CustomersViewCtrl
  * @description
  * # CustomersViewCtrl
  * Controller of the fatturaApp
  */
  angular
  .module('fatturaApp')
  .controller('CustomersViewController', CustomersViewController);

  CustomersViewController.$inject = ['customerPrepServices', '$routeParams', '$location', 'database', '$log'];

  /* @ngInject */
  function CustomersViewController(customerPrepServices, $routeParams, $location, database, $log) {
    var customerVm = this;

    customerVm.customer = customerPrepServices;
    customerVm.isEditing = false;

    customerVm.editCustomer = editCustomer;
    customerVm.updateCustomer = updateCustomer;
    customerVm.deleteCustomer = deleteCustomer;

    function editCustomer() {
      customerVm.isEditing = !customerVm.isEditing;
    }

    function updateCustomer(isValid) {
      if (isValid) {
        database.updateCustomer(parseInt($routeParams.id), customerVm.customer).then(function(data) {
          if (typeof data.id === 'number') {
            $log.info('Successfull updated');
            customerVm.editCustomer();
          }
        });
      }
    }

    function deleteCustomer(id) {
      database.deleteCustomer(parseInt($routeParams.id)).then(function(data) {
        $location.path('/customers');
      });
    }

  }
})();
