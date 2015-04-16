(function(){
  'use strict';
  describe("Bronze Medalist", function() {
    describe("Existence, type and content", function() {
      it("The bronze function should be defined", function() {
        expect(bronze).toBeDefined();
      });

      it("should be a typeof function", function() {
        expect(typeof bronze).toBe(typeof (function(){}));
      });

      it("should return `false` for an empty array", function() {
        expect(bronze([])).toBe(false);
      });
    });
    
    describe("Array of letters", function() {
      it("should return `world` for `['hello', 'world', 'before', 'all']`", function() {
        expect(bronze(['hello', 'world', 'before', 'all'])).toEqual('world');
      });

      it("should return `code` for `['coder','byte','code]`", function() {
        expect(bronze(['coder','byte','code'])).toEqual('code');
      });

      it("should return `abc` for `['abc','defg','z','hijk']`", function() {
        expect(bronze(['abc','defg','z','hijk'])).toEqual('abc');
      });
      
    });

    describe("Array of numbers", function() {
      it("should return `43` for `[32, 44, 66, 12, 43]`", function() {
        expect(bronze([32, 44, 66, 12, 43])).toEqual(43);
      });

      it("should return `101` for `[23, 196, 34, 9, 081, 101, 491, 3]`", function() {
        expect(bronze([23, 196, 34, 9, 081, 101, 491, 3])).toEqual(101);
      });

      it("should return `32` for `[900, 32, -108, 009, 419, -71, 0]`", function() {
        expect(bronze([900, 32, -108, 009, 419, -71, 0])).toEqual(32);
      });
    });

    describe("Array of mixed datatypes", function() {
      it("should return `Unknown` for `[32, 'pickle', {obi: 'boy', simbi: 'girl'}, true, null, undefined, -32]", function() {
        expect(bronze([32, 'pickle', {obi: 'boy', simbi: 'girl'}, true, null, undefined, -32])).toEqual('Unknown');
      });
    });

  });
})();