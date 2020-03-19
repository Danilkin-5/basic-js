module.exports = function countCats(matrix) {
  let count = 0;
  for (let element of matrix) {
  for (let item of element) {
  if (/^\^\^$/.test(item)) count++;
  }
  }
  return count ? count : 0;
};
