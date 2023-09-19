const fib = function () {
  const fibArr = [0, 1];
  let sum = 1;
  for (let i = 1; i < 49; i++) {
    fibArr.push(sum);
    sum += fibArr[i];
  }
  return fibArr;
};

const fibNums = fib();
console.log(fibNums);
const numToStrings = function (list) {
  return _.map(list, function (num) { return `${num}`; });
};
console.log(numToStrings(fibNums));

const numEvenNums = function (list) {
  return (_.filter(list, function (num) { return num % 2 === 0; })).length;
};
console.log(numEvenNums(fibNums));
