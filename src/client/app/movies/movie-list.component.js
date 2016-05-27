(function(){
  "use strict";

  angular
    .module('app.movies')
    .component('movieList', {
      templateUrl: 'app/movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: function () {

        var vm = this;
        vm.message = 'Hello from a component controller';

        vm.changeMessage = function() {
          vm.message = "New message";
        };
        
      }
    });

}());
