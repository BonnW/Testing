const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return the sum of a number multiplied by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(5);
      expect(result).to.equal(50);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(1);
      expect(result).to.be.an('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract 5 from argument', () => {
      const subtractFive = funcs.subtractFive;
      const result = subtractFive(10);
      expect(result).to.equal(5);
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      const result = subtractFive(6);
      expect(result).to.be.an('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a Boolean', () => {
      const areSameLength = funcs.areSameLength;
      const result = areSameLength('apple', 'apple');
      expect(result).to.be.a('boolean');
    });
    it('should return true if same length', () => {
      const areSameLength = funcs.areSameLength;
      const result = areSameLength('apple', 'apple');
      expect(result).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      const result = areEqual('apple', 'apple');
      expect(result).to.be.a('boolean');
    });
    it('should return true if both args are equal', () => {
      const areEqual = funcs.areEqual;
      const result = areEqual('apple', 'apple');
      expect(result).to.equal(true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return an integer', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(1);
      expect(result).to.be.a('boolean');
    });
    it('should return true if arg is less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(1);
      expect(result).to.equal(true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(60);
      expect(result).to.be.a('boolean');
    });
    it('should return true if arg is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(60);
      expect(result).to.equal(true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      const result = add(1, 1);
      expect(result).to.be.a('number');
    });
    it('should return the sum of two args', () => {
      const add = funcs.add;
      const result = add(1, 1);
      expect(result).to.equal(2);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return an number', () => {
      const subtract = funcs.subtract;
      const result = subtract(2, 1);
      expect(result).to.be.a('number');
    });
    it('should return 1 if 2 and 1 are passed as args', () => {
      const subtract = funcs.subtract;
      const result = subtract(2, 1);
      expect(result).to.equal(1);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      const result = divide(4, 2);
      expect(result).to.be.a('number');
    });
    it('should return a number divided by another number', () => {
      const divide = funcs.divide;
      const result = divide(4, 2);
      expect(result).to.equal(2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      const result = multiply(4, 2);
      expect(result).to.be.a('number');
    });
    it('should return a number muliplied by another number', () => {
      const multiply = funcs.multiply;
      const result = multiply(4, 2);
      expect(result).to.equal(8);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      const result = getRemainder(4, 2);
      expect(result).to.be.a('number');
    });
    it('should return the remainder of two numbers', () => {
      const getRemainder = funcs.getRemainder;
      const result = getRemainder(4, 2);
      expect(result).to.equal(0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      const result = isEven(2);
      expect(result).to.be.a('boolean');
    });
    it('should return true if arg is even', () => {
      const isEven = funcs.isEven;
      const result = isEven(2);
      expect(result).to.equal(true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(3);
      expect(result).to.be.a('boolean');
    });
    it('should return true if arg is odd', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(3);
      expect(result).to.equal(true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      const result = square(2, 2);
      expect(result).to.be.a('number');
    });
    it('should return a number squared', () => {
      const square = funcs.square;
      const result = square(2);
      expect(result).to.equal(4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      const result = cube(2);
      expect(result).to.be.a('number');
    });
    it('should return a number cubed', () => {
      const cube = funcs.cube;
      const result = cube(2);
      expect(result).to.equal(8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      const result = raiseToPower(2, 2);
      expect(result).to.be.a('number');
    });
    it('should return a number to the power of another number', () => {
      const raiseToPower = funcs.raiseToPower;
      const result = raiseToPower(2, 2);
      expect(result).to.equal(4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      const result = roundNumber(2.2);
      expect(result).to.be.a('number');
    });
    it('should return a whole number', () => {
      const roundNumber = funcs.roundNumber;
      const result = roundNumber(2.2);
      expect(result).to.equal(2);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      const result = roundUp(2.2);
      expect(result).to.be.a('number');
    });
    it('should return a number rounded up', () => {
      const roundUp = funcs.roundUp;
      const result = roundUp(2.2);
      expect(result).to.equal(3);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const result = addExclamationPoint('hi');
      expect(result).to.be.a('string');
    });
    it('should add an exclamation point to the end of a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const result = addExclamationPoint('hi');
      expect(result).to.equal('hi!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('b', 'b');
      expect(result).to.be.a('string');
    });
    it('should return a string with both names', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('b', 'b');
      expect(result).to.equal('b b');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('b');
      expect(result).to.be.a('string');
    });
    it('should return a greeting', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('b');
      expect(result).to.equal('Hello b!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const result = getRectangleArea(2, 2);
      expect(result).to.be.a('number');
    });
    it('should return area=L*W', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const result = getRectangleArea(2, 2);
      expect(result).to.equal(4);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(4, 2);
      expect(result).to.be.a('number');
    });
    it('should return area of a triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(4, 2);
      expect(result).to.equal(4);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      const result = getCircleArea(5);
    });
    it('should return the area of the title when given a radius', () => {
      const getCircleArea = funcs.getCircleArea;
      const result = getCircleArea(5);
      expect(result).to.equal(Math.PI * 5 * 5);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(5, 5, 5);
      expect(result).to.be.a('number');
    });
    it('should return a Rec prism volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(5, 5, 5);
      expect(result).to.equal(125);
    });
  });
});
