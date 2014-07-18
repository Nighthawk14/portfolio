'use strict';

describe('Controller: TechCtrl', function () {

  // load the controller's module
  beforeEach(module('antoinesavignacfrApp'));

  var TechCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechCtrl = $controller('TechCtrl', {
      $scope: scope
    });
  }));

  it('should create a project list', function(){
    expect(scope.technos).toEqual(jasmine.any(Array));
  });
});
