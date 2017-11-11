const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return bigger number if given two integers', () => {
      const getBiggest = funcs.getBiggest;
      const result = getBiggest(2, 4);
      expect(result).to.equal(4);
    });
    it('should return a value', () => {
      const getBiggest = funcs.getBiggest;
      const result = getBiggest(2, 4);
      expect(result).to.not.equal('undefined');
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const greeting = funcs.greeting;
      const result = greeting('English');
      expect(result).to.be.a('string');
    });
    it('should return hola given the language spanish', () => {
      const greeting = funcs.greeting;
      const result = greeting('Spanish');
      expect(result).to.equal('Hola!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(2);
      expect(result).to.be.a('boolean');
    });
    it('should return true given the value 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(5);
      expect(result).to.equal(true);
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(10);
      expect(result).to.be.a('boolean');
    });
    it('should return true if value is 25', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(25);
      expect(result).to.equal(true);
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const isInteger = funcs.isInteger;
      const result = isInteger(5);
      expect(result).to.be.a('boolean');
    });
    it('should return true given a number', () => {
      const isInteger = funcs.isInteger;
      const result = isInteger(5);
      expect(result).to.equal(true);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a number', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(2);
      expect(result).to.be.a('number');
    });
    it('should return buzz if number is divisible by 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(5);
      expect(result).to.equal('buzz');
    });
  });
  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(7);
      expect(result).to.be.a('boolean');
    });
    it('should return true given a prime number', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(7);
      expect(result).to.equal(true);
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first item in an array', () => {
      const returnFirst = funcs.returnFirst;
      const testArr = [1, 2, 3];
      const result = returnFirst(testArr);
      expect(result).to.equal(1);
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last item in an array', () => {
      const returnLast = funcs.returnLast;
      const arr = [1, 2, 3];
      const result = returnLast(arr);
      expect(result).to.equal(3);
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      const getArrayLength = funcs.getArrayLength;
      const arr = [1, 2, 3];
      const result = getArrayLength(arr);
      expect(result).to.be.a('number');
    });
    it('should return the length of an array', () => {
      const getArrayLength = funcs.getArrayLength;
      const arr = [1, 2, 3];
      const result = getArrayLength(arr);
      expect(result).to.equal(3);
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return a number', () => {
      const incrementByOne = funcs.incrementByOne;
      const result = incrementByOne(1);
      expect(result).to.be.a('number');
    });
    it('should return an arr incremented', () => {
      const incrementByOne = funcs.incrementByOne;
      const arr = [1, 2, 3];
      const result = incrementByOne(arr);
      expect(result).to.equal(arr);
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      const addItemToArray = funcs.addItemToArray;
      const arr = [1, 2, 3];
      const result = addItemToArray(arr, 4);
      expect(result).to.be.a('array');
    });
    it('should return an array with a new item', () => {
      const addItemToArray = funcs.addItemToArray;
      const arr = [1, 2, 3];
      // const newArr = arr.push(4);
      const result = addItemToArray(arr, 4);
      expect(result).to.equal(arr);
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      const addItemToFront = funcs.addItemToFront;
      const arr = [1, 2, 3];
      const result = addItemToFront(arr, 0);
      expect(result).to.be.a('array');
    });
    it('should return an array with something new at the beginning', () => {
      const addItemToFront = funcs.addItemToFront;
      const arr = [1, 2, 3];
      const result = addItemToFront(arr, 0);
      expect(result).to.equal(arr);
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      const wordArr = ['hi', 'bonn'];
      const result = wordsToSentence(wordArr);
      expect(result).to.be.a('string');
    });
    it('should return a sentence given a word array', () => {
      const wordsToSentence = funcs.wordsToSentence;
      const wordArr = ['hi', 'bonn'];
      const result = wordsToSentence(wordArr);
      expect(result).to.equal('hi bonn');
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should return a boolean', () => {
      const contains = funcs.contains;
      const arr = [1, 2, 3];
      const result = contains(arr, 2);
      expect(result).to.be.a('boolean');
    });
    it('should return true if my item is in the array', () => {
      const contains = funcs.contains;
      const arr = [1, 2, 3];
      const result = contains(arr, 2);
      expect(result).to.equal(true);
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should return a number', () => {
      const addNumbers = funcs.addNumbers;
      const numArr = [1, 2, 3];
      const result = addNumbers(numArr);
      expect(result).to.be.a('number');
    });
    it('should return my numbers combined', () => {
      const addNumbers = funcs.addNumbers;
      const numArr = [1, 2, 3];
      const result = addNumbers(numArr);
      expect(result).to.equal(6);
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      const numArr = [1, 2, 3];
      const result = averageTestScore(numArr);
      expect(result).to.be.a('number');
    });
    it('should return the averaged sum', () => {
      const averageTestScore = funcs.averageTestScore;
      const numArr = [1, 2, 3];
      const result = averageTestScore(numArr);
      expect(result).to.equal(2);
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      const numArr = [1, 2, 3];
      const result = largestNumber(numArr);
      expect(result).to.be.a('number');
    });
    it('should return the largest number', () => {
      const largestNumber = funcs.largestNumber;
      const numArr = [1, 2, 3];
      const result = largestNumber(numArr);
      expect(result).to.equal(3);
    });
  });
});
