export default algorithm => {
  const result = algorithm.join(' ')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')');

  return result;
};
