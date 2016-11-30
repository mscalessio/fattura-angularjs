(function() {
  'use strict';

  /**
  * @ngdoc function
  * @name fatturaApp.controller:OptionsController
  * @description
  * # OptionsController
  * Controller of the fatturaApp
  */
  angular
  .module('fatturaApp')
  .controller('OptionsController', OptionsController);

  OptionsController.$inject = ['optionsPrepServices', 'database', '$log'];

  /* @ngInject */
  function OptionsController(optionsPrepServices, database, $log) {
    var optionsVm = this;

    optionsVm.options = optionsPrepServices;
    optionsVm.updateOptions = updateOptions;
    optionsVm.alerts = [];
    optionsVm.closeAlert = closeAlert;

    function updateOptions() {
      database.updateOptions(optionsVm.options).then(function(data) {
        $log.info('Options updated');
        optionsVm.alerts.push({type: 'success', msg: 'Updated successful'});
      });
    }

    function closeAlert(index) {
      optionsVm.alerts.splice(index, 1);
    }

  }
})();
