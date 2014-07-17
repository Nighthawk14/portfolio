'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('antoinesavignacfrApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should create a project list', function(){
    expect(scope.projects).toEqual(jasmine.any(Array));
  });

});
