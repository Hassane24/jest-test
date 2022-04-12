const calculator = {
  add: (a, b) => {
    a = Number(a);
    b = Number(b);
    return a + b;
  },

  substract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    b = Number(b);
    if (b === 0) return "ERROR";
    return a / b;
  },
};

export { calculator };
