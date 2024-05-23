function get(array, index, defaultValue = null) {
  let result = defaultValue;

  if (index < array.length && index >= 0) {
    result = array[index];
  }

  return result;
}

module.exports = get;
