(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name fatturaApp.controller:FattureViewController
   * @description
   * # FattureViewController
   * Controller of the fatturaApp
   */
  angular.module('fatturaApp')
    .controller('FattureViewController', FattureViewController);

  FattureViewController.$inject = ['invoicePrepServices'];

  /* @ngInject */
  function FattureViewController(invoicePrepServices) {
    /* jshint validthis: true */
    var fattureView = this;

    fattureView.invoice = invoicePrepServices;

  }

})();
