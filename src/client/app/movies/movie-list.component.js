(function(){
  "use strict";

  angular
    .module('app.movies')
    .component('movieList', {
      templateUrl: 'app/movies/movie-list.component.html',
      controller: function () {
        this.message = 'Hello from a component controller';
      }
    });

}());
