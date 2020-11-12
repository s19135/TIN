const secondLowest = array => [...new Set(array)].sort((a, b) => a - b)[1];
const secondGreatest = array => {
  const cleaned = [...new Set(array)].sort((a, b) => a - b);
  return cleaned[cleaned.length - 2]
};

const arr = [3, 5, 3, 1, 345, 22, 66, 0, 234];

console.log(secondLowest(arr));
console.log(secondGreatest(arr)); 