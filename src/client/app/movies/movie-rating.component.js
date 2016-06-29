(function(){
  "use strict";

  angular
    .module('app.movies')
    .component('movieRating', {
      templateUrl: 'app/movies/movie-rating.component.html',
      bindings: {
        value: "<"
      },
      controllerAs: 'vm',
      controller: ['$q', 'dataservice', 'logger' , movieRating]
    });

  function movieRating() {
    var vm = this;

    vm.$onInit = function() {
      vm.entries = new Array(vm.value);
    };

    vm.$onChanges = function() {
      vm.entries = new Array(vm.value);
    }

  }

}());
