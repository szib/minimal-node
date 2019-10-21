import sum from '../src/sum';

describe('#sum()', function() {
  describe('without arguments', function() {
    it('should return 0', function() {
      expect(sum()).toBe(0);
    });
  });

  describe('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should return argument when only one argument is passed', function() {
      expect(sum(5)).toBe(5);
    });
  });

  describe('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        sum(1, 2, '3', [4], 5);
      }).toThrow(TypeError, 'sum() expects only numbers.');
    });
  });
});
