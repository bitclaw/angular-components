/* jshint -W117, -W030 */
describe('MoviesController', function() {
  var movieList;

  beforeEach(function() {
    bard.appModule('app.movies');
    bard.inject('$componentController', '$log', '$rootScope');
  });

  beforeEach(function() {
    movieList = $componentController('movieList');
    $rootScope.$apply();
  });

  describe('Movie List Component', function() {
    it('should be created successfully', function() {
      expect(movieList).to.be.defined;
    });

    // describe('after activate', function() {
    //   it('should have title of Movies', function() {
    //     expect(controller.title).to.equal('Movies');
    //   });
    //
    //   it('should have logged "Activated"', function() {
    //     expect($log.info.logs).to.match(/Activated/);
    //   });
    // });

  });
});
