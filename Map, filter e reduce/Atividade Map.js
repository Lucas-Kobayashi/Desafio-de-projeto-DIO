function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums = [1, 3, 5, 7];

console.log(mapSemThis(nums));
