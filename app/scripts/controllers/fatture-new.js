(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name fatturaApp.controller:FattureNewController
   * @description
   * # FattureNewController
   * Controller of the fatturaApp
   */
  angular.module('fatturaApp')
    .controller('FattureNewController', FattureNewController);

  FattureNewController.$inject = [
    '$location',
    'database',
    'optionsPrepServices',
    'companyPrepServices',
    'customersPrepServices',
    'invoicesPrepServices'
  ];
  /* @ngInject */
  function FattureNewController($location,
    database,
    optionsPrepServices,
    companyPrepServices,
    customersPrepServices,
    invoicesPrepServices) {
    /* jshint validthis: true */
    var fattureNew = this;

    fattureNew.options = optionsPrepServices;
    fattureNew.company = companyPrepServices;
    fattureNew.customers = customersPrepServices;
    fattureNew.invoices = invoicesPrepServices;
    fattureNew.invoiceInfo = {
      invoice_id: fattureNew.invoices.length + 1,
      date: new Date(),
    };
    fattureNew.customer = {};
    fattureNew.items = [];

    // Invoice items ACTIONS
    fattureNew.addItem = addItem;
    fattureNew.removeItem = removeItem;

    // Calculation
    fattureNew.imponibile = imponibile;
    fattureNew.rivalsa = rivalsa;
    fattureNew.totaleImponibile = totaleImponibile;
    fattureNew.iva = iva;
    fattureNew.totaleFattura = totaleFattura;
    fattureNew.ritenutaAcconto = ritenutaAcconto;
    fattureNew.nettoDaVersare = nettoDaVersare;

    // Save
    fattureNew.saveInvoice = saveInvoice;

    ////////////////////////////

    function addItem() {
      var item ={
        id: fattureNew.items.length,
        description:'',
        qty: 1,
        cost: 0
      };
      fattureNew.items.push(item);
    }

    function removeItem(item) {
      fattureNew.items.splice(fattureNew.items.indexOf(item), 1);
    }

    function imponibile() {
      var total = 0.00;
      angular.forEach(fattureNew.items, function(item, key){
        total += (item.qty * item.cost);
      });
      return total;
    }

    function rivalsa() {
      return fattureNew.imponibile() * fattureNew.options.inps;
    }

    function totaleImponibile() {
      return fattureNew.imponibile() + fattureNew.rivalsa();
    }

    function iva() {
      return fattureNew.totaleImponibile() * fattureNew.options.tax;
    }

    function totaleFattura() {
      return fattureNew.totaleImponibile() + fattureNew.iva();
    }

    function ritenutaAcconto() {
      return fattureNew.totaleImponibile() * fattureNew.options.ritenuta;
    }

    function nettoDaVersare() {
      return fattureNew.totaleFattura() - fattureNew.ritenutaAcconto();
    }

    function saveInvoice() {
      var invoice = {
        invoice_id: fattureNew.invoiceInfo.invoice_id,
        date: fattureNew.invoiceInfo.date,
        company: fattureNew.company,
        customer: fattureNew.customer,
        items: fattureNew.items,
        imponibile: fattureNew.imponibile(),
        rivalsa: fattureNew.rivalsa(),
        totale_imponibile: fattureNew.totaleImponibile(),
        iva: fattureNew.iva(),
        totale_fattura: fattureNew.totaleFattura(),
        ritenuta_acconto: fattureNew.ritenutaAcconto(),
        netto_da_versare: fattureNew.nettoDaVersare()
      };
      database.saveInvoice(invoice).then(function(data) {
        if (data.id) {
          $location.path('/fatture/view/' + data.id);
        }
      });
    }

  }

})();
