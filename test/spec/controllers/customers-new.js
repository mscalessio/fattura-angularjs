'use strict';

describe('Controller: CustomersNewController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var CustomersNewController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomersNewController = $controller('CustomersNewController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
