const arrayToStringWithNewLine = (arr: string[], width: number) => {
  let result = '';
  arr.forEach((item, index) => {
    result += item;
    if ((index + 1) % width === 0) {
      result += ',\n';
    } else if (index !== arr.length - 1) {
      result += ', ';
    }
  });
  return result;
};

export default arrayToStringWithNewLine;
