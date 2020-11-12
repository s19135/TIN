const longestWord = str => {
  let longest = '';
  str.split(' ').forEach(x => x.length > longest.length && (longest = x))
  return longest;
}

console.log(longestWord('JavaScript function that accepts a string as a parameter and find the longest word within the string'))