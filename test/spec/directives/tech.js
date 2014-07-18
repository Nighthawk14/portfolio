'use strict';

describe('Directive: tech', function () {

  // load the directive's module
  beforeEach(module('antoinesavignacfrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div tech></div>');
    element = $compile(element)(scope);
  }));
});
