(function() {
  'use strict';

  angular
    .module('app.movies')
    .controller('MoviesController', MoviesController);

  AdminController.$inject = ['logger'];
  /* @ngInject */
  function MoviesController(logger) {
    var vm = this;
    vm.title = 'Movies';

    activate();

    function activate() {
      logger.info('Activated Movies View');
    }
  }
})();
