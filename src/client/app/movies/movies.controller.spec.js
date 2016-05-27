/* jshint -W117, -W030 */
describe('MoviesController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.movies');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('MoviesController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Movies controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Movies', function() {
        expect(controller.title).to.equal('Movies');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
