'use strict';

describe('Controller: CustomersController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var CustomersController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomersController = $controller('CustomersController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
