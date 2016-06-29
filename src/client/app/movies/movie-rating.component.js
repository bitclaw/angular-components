(function() {
  'use strict';

  angular
    .module('app.movies')
    .component('MovieRatingComponent', {
      templateUrl: 'app/movies/movie-rating.component.html',
      bindings: {
        value: '<'
      },
      transclude: true,
      controllerAs: 'vm',
      controller: [MovieRatingComponent]
    });

  function MovieRatingComponent() {
    var vm = this;

    vm.$onInit = function() {
      vm.entries = new Array(vm.value);
    };

    vm.$onChanges = function() {
      vm.entries = new Array(vm.value);
    };

  }

}());
