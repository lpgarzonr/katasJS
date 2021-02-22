function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a,b)=> a>b)
  if (queries.length <= 1) {
    return 0;
  }

  let acc = queries[0]; //3
  for (let i = 1; i < queries.length - 1; i++) {
    const newWait = queries[i - 1] + queries[i]; //7
    acc += newWait; //10
    queries[i] = newWait;

    console.log(queries);
  }
  return acc;
}

const input = [17, 4, 3]

console.log(minimumWaitingTime(input))
