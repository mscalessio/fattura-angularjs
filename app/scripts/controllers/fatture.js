(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name fatturaApp.controller:FattureController
   * @description
   * # FattureController
   * Controller of the fatturaApp
   */
  angular.module('fatturaApp')
    .controller('FattureController', FattureController);

  FattureController.$inject = ['$scope', 'invoicesPrepServices', '$routeParams', 'database', '$window'];

  /* @ngInject */
  function FattureController($scope, invoicesPrepServices, $routeParams, database, $window) {
    /* jshint validthis: true */
    var fatture = this;

    fatture.invoices = invoicesPrepServices;
    fatture.deleteInvoice = deleteInvoice;
    fatture.alerts =[];
    fatture.closeAlert = closeAlert;

    function deleteInvoice(id) {
      if ($window.confirm('Sicuro di voler eliminare?')) {
        database.deleteInvoice(id).then(function(data) {
          fatture.alerts.push({type: 'success', msg: 'Invoice deleted.'});
          fatture.invoices.splice(fatture.invoices.indexOf(id), 1);
          return fatture.invoices;
        });
      }
    }

    function closeAlert(index) {
      fatture.alerts.splice(index, 1);
    }

  }

})();
