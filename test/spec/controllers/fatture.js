'use strict';

describe('Controller: FattureController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var FattureController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FattureController = $controller('FattureController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
