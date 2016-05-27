(function() {
  'use strict';

  angular
    .module('app.movies')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'movies',
        config: {
          url: '/movies',
          templateUrl: 'app/movies/movies.html',
          controller: 'MoviesController',
          controllerAs: 'vm',
          title: 'movies',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Movies'
          }
        }
      }
    ];
  }
})();
