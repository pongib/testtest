var assert = require('assert');
var C = require('../cash.js');


describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    });

    it('getChange(210, 300) should equal [50, 20, 20]', function(){
      assert.deepEqual(C.getChange(210, 300), [50, 20, 20]);
    });

    it('getChange(486, 1000) should equal [500, 10, 2, 2]', function(){
      assert.deepEqual(C.getChange(486, 1000), [500, 10, 2, 2]);
    });

    it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
      assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
    });

    it('getChange(0, 600) should equal [500, 100]', function(){
      assert.deepEqual(C.getChange(0, 600), [500, 100]);
    });

  });
});


// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
