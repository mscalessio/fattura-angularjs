'use strict';

describe('Controller: FattureNewController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var FattureNewController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FattureNewController = $controller('FattureNewController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
