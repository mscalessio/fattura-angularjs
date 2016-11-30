'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('fatturaApp'));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('', function () {
  });
});
