export default algorithm => {
  if (!algorithm) {
    return '';
  }

  const result = algorithm.join(' ')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')');

  return result;
};
