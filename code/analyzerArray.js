function arrayAnalyzer(array) {
  let min = array[0];
  let max = array[0];
  let average = 0;
  let length = array.length;
  array.forEach((element) => {
    if (element < min) min = element;
    if (max < element) max = element;
    average += element;
  });
  average = average / length;
  return { min, max, average, length };
}

export { arrayAnalyzer };
