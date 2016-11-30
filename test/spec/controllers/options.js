'use strict';

describe('Controller: OptionsController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var OptionsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OptionsController = $controller('OptionsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
