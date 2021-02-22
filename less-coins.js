function minNumberOfCoinsForChange(n, denoms) {
  // sort the coins in descendin order
  // divide n on the first denomination and round tto lower this added to the number of coins
  //take next denomination but now using a new n
  const sortedDenoms = denoms.sort((a, b) => b - a);
  const solutions = [];
  for (let i = 0; i < sortedDenoms.length; i++) {
    const solution = numberOfCoins(n, sortedDenoms.slice(i), 0);
    if (solution >= 0) {
      solutions.push(solution);
    }
  }
  return solutions.length ? Math.min(...solutions) : -1;
}

function numberOfCoins(n, denoms, numCoins) {
  if (n === 0) {
    return numCoins;
  }
  if (!denoms.length) {
    return -1;
  }
  const currentDenom = denoms[0];
  const numOfCointCurrentDen = Math.floor(n / currentDenom);
  const newN = n - currentDenom * numOfCointCurrentDen;
  const solutions = [];
  const newDenoms = denoms.slice(1);
  for (let i = 0; i < newDenoms.length; i++) {
    const solution = numberOfCoins(
      newN,
      newDenoms.slice(i),
      numCoins + numOfCointCurrentDen
    );
    if (solution >= 0) {
      solutions.push(solution);
    }
  }
  return solutions.length ? Math.min(...solutions) : -1;
}
const denoms = [1, 5, 10]
const n = 7

minNumberOfCoinsForChange(n, denoms)
