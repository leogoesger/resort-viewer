const Nightmare = require('nightmare');

describe('Load a Page', function() {
  this.timeout('30s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  describe('/ (Pages)', () => {
    it('upload page should load without error', done => {
      nightmare
        .goto('http://localhost:3000/')
        .end()
        .then(function(result) {
          done();
        })
        .catch(done);
    });
    it('about page should load without error', done => {
      nightmare
        .goto('http://localhost:3000/about')
        .end()
        .then(function(result) {
          done();
        })
        .catch(done);
    });
    it('restore page should load without error', done => {
      nightmare
        .goto('http://localhost:3000/resorts')
        .end()
        .then(function(result) {
          done();
        })
        .catch(done);
    });
  });
});
