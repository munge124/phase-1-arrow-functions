const foo = function() {
    return 'bar';
  };

  foo(); // => 'bar'

  const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2, 3); // => 5

const multiply = (x, y) => x * y;
multiply(2, 3); // => 6

const double = x => x * 2;

const sum = (a, b) => {
    console.log(`Adding ${a}`);
    console.log(`Adding ${b}`);
    return a + b;
  };
  sum(1, 2); // => 3

  const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2); 
console.log(squares); // => [1, 4, 9]

const divide = (a, b) => a / b;

const square = x => x * x;

module.exports = {
  divide,
  square
};

  