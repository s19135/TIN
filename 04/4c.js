const isPalindrome = str => str === str.split('').reverse().join('');

console.log(isPalindrome('wasitacaroracatisaw'));
console.log(isPalindrome('Was it a car or a cat I saw?'));