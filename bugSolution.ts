function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

let result = add(1, 2); // Works correctly

try {
  let result2 = add(1, "2"); // Throws an error at runtime
} catch (error) {
  console.error(error);
}

// Alternative solution using type guards:
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}

let result3 = addSafe(1,2); // works

try {
  let result4 = addSafe(1, "2"); // throws error
} catch (error) {
  console.error(error);
}