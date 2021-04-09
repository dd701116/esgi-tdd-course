const wordCounter = string => {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected string, got ${typeof string}`);
  }

  return string.split(/[\s|\W]+/).filter(str => {
    return str !== '';
  }).length;
};

export default wordCounter;
