const amountTocoins = (amount, coins) => {
  return coins
    .sort((a, b) => a - b)
    .reverse()
    .map(element => {
      const fit = Math.floor(amount / element);
      if (fit > 0) {
        amount -= fit * element;
        return [...Array(fit).fill(element)];
      }
      return null;
    })
    .filter(Boolean)
    .reduce((accumulator, currentValue) => [...accumulator, ...currentValue], []);
};

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
