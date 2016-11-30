'use strict';

describe('Controller: CustomersViewController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var CustomersViewController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomersViewController = $controller('CustomersViewController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
