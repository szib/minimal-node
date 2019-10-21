export default (...args) => {
  if (args.length === 0) return 0;
  if (args.length === 1) return args[0];

  return args.reduce((acc, v) => {
    if (Number.isInteger(v)) {
      return acc + v;
    } else {
      throw new TypeError('sum() expects only numbers.');
    }
  }, 0);
};
