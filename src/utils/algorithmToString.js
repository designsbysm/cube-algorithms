import algorithmAddGroupTags from './algorithmAddGroupTags';

export default algorithm => {
  if (!algorithm) {
    return '';
  }

  const result = algorithm.map(algorithmAddGroupTags)
    .flat()
    .map(item => item.name || item)
    .join(' ')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')');

  return result;
};
