/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  let count = 0;

  arr.forEach((item, index) => {
    if(arr[arr[item - 1] - 1] === index + 1) count++;
  });  

  return Math.floor(count / 3);
};

