/* jshint -W117, -W030 */
describe('movies routes', function() {
  describe('state', function() {
    var view = 'app/movies/movies.html';

    beforeEach(function() {
      module('app.movies', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state movies to url /movies ', function() {
      expect($state.href('movies', {})).to.equal('/movies');
    });

    it('should map /movies route to Movies View template', function() {
      expect($state.get('movies').templateUrl).to.equal(view);
    });

    it('of dashboard should work with $state.go', function() {
      $state.go('movies');
      $rootScope.$apply();
      expect($state.is('movies'));
    });
  });
});
