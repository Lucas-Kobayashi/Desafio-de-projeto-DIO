function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const nums = [1, 5, 8, 3, 45, 62, 34];

console.log(filtraPares(nums));

//function filtraPares(arr) {
//  return arr.filter(function (item){
//  return item % 2 === 0;});
//}
