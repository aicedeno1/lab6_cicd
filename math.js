function factorial(n) {
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n < 0) {
    throw new Error('Fibonacci no está definido para números negativos');
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let previous = 0;
  let current = 1;

  for (let index = 2; index <= n; index += 1) {
    const nextValue = previous + current;
    previous = current;
    current = nextValue;
  }

  return current;
}

module.exports = {
  factorial,
  fibonacci
};