const Nightmare = require('nightmare');

describe('Load pages', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('upload page should load without error', done => {
    nightmare
      .goto('https://resort-viewer.herokuapp.com/')
      .end()
      .then(function(result) {
        done();
      })
      .catch(done);
  });
  it('about page should load without error', done => {
    nightmare
      .goto('https://resort-viewer.herokuapp.com/about')
      .end()
      .then(function(result) {
        done();
      })
      .catch(done);
  });
  it('restore page should load without error', done => {
    nightmare
      .goto('https://resort-viewer.herokuapp.com/resorts')
      .end()
      .then(function(result) {
        done();
      })
      .catch(done);
  });
});
