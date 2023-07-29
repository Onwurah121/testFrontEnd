// function isHigh(price){
//     return price > 300
// }

// console.log(isHigh(1500));

// const assert = require('node:assert');
import assert from 'node:assert';

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
    console.log(err);
  // assert(err instanceof assert.AssertionError);
  // assert.strictEqual(err.message, message);
  // assert.strictEqual(err.name, 'AssertionError');
  // assert.strictEqual(err.actual, 1);
  // assert.strictEqual(err.expected, 2);
  // assert.strictEqual(err.code, 'ERR_ASSERTION');
  // assert.strictEqual(err.operator, 'strictEqual');
  // assert.strictEqual(err.generatedMessage, true);
}