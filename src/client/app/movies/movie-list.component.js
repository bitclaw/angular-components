(function(){
  "use strict";

  angular
    .module('app.movies')
    .component('movieList', {
      templateUrl: 'app/movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: ['$q', 'dataservice', 'logger' , movieList]
    });

  function movieList($q,dataservice,logger) {
    var vm = this;
    vm.movies = [];

    vm.$onInit = function() {
      getMovies(dataservice).then(function(movies){
        vm.movies = movies;
      });
    };
  }

  function getMovies(dataservice) {
    return dataservice.getMovies().then(function(data) {
      return data;
    });
  }

}());
