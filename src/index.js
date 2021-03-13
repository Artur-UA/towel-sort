
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let myarr = matrix.reduce((a,b) => [...a, ...(matrix.indexOf(b) % 2 === 0 ?  b : b.reverse())], []);
  return myarr;
};