export default item => {
  if (!Array.isArray(item)) {
    return item;
  }

  return item.map((sub, index, list) => {
    const update = { ...sub };

    if (index === 0) {
      update.name = `(${update.name}`;
    } else if (list.length === index + 1) {
      update.name = `${update.name})`;
    }

    return update;
  });
};
