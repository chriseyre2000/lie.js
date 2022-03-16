let assert = require('assert')
let { orTimeout, orReject } = require('../lib')

describe('Lies', function() {
  describe('orReject', function() {
    it('Errors on timeout', function(done) {
      
      orReject('bang', 0)
      .then( () => {} )
      .catch( e => {
        assert.equal(e, 'bang')
        done()
      })
    });
  });

  describe('orTimeout', function(){
    it('Returns timeout value on then', function(done) {
      
      orTimeout('bang', 0)
      .then( (res) => {
        assert.equal(res, 'bang')
        done()
      })
    });  
  })
});