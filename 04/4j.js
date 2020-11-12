function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);
  if (val === arr[mid])
    return mid;
  if (start >= end)
    return 'Number not found';
  return val < arr[mid]
    ? binarySearch(arr, val, start, mid - 1) : binarySearch(arr, val, mid + 1, end);
}

const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr_1, 1));