import assert from 'assert'
import {timeoutPromise, defaultTimeout} from '../index'

describe('Lies', function() {
  describe('timeoutPromise', function() {
    it('returns fail on then', function(done) {
      
      timeoutPromise(0, 'bang')
      .then( () => {} )
      .catch( e => {
        assert.equal(e, 'bang')
        done()
      })
    });
  });

  describe('defaultTimeout', function(){
    it('returns timeout on then', function(done) {
      
      defaultTimeout(0, 'bang')
      .then( (res) => {
        assert.equal(res, 'bang')
        done()
      })
    });  
  })
});