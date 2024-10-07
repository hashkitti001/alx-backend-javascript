function cleanSet(set, startString) {
  let string = '';
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      string += item.replace('bon', '');
      string += '-';
    }
  });
  return string.slice(0, string.length);
}
