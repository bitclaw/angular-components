(function() {
  'use strict';

  angular
    .module('app.movies')
    .component('movieList', {
      templateUrl: 'app/movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: ['$q', 'dataservice', 'logger' , movieList]
    });

  /*jshint validthis:true */
  function movieList($q,dataservice) {
    var vm = this;
    vm.movies = [];

    vm.$onInit = function() {
      getMovies(dataservice).then(function(movies) {
        vm.movies = movies;
      });
    };

    vm.upRating = function(movie) {
      if (movie.rating < 5) {
        movie.rating += 1;
      }
    };

    vm.downRating = function(movie) {
      if (movie.rating > 1) {
        movie.rating -= 1;
      }
    };

  }

  function getMovies(dataservice) {
    return dataservice.getMovies().then(function(data) {
      return data;
    });
  }

}());
