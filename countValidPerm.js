// https://leetcode.com/explore/challenge/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3591/

var countArrangement = function (n) {
  const arr = [...Array(n).keys()].map((i) => i + 1);
  const counter = { val: 0 };
  getValidPermCount(arr, [], counter);
  return counter.val;
};

function getValidPermCount(arr, perm, counter) {
  if (!arr.length) {
    counter.val = counter.val + 1;
    return;
  }
  for (let idx = 0; idx < arr.length; idx++) {
    const num = arr[idx];
    const i = perm.length + 1;
    if (num % i != 0 && i % num != 0) {
      return;
    }
    const newArr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const newPerm = [...perm, num]; // TODO: can i mutate perm? i dont thin so
    getValidPermCount(newArr, newPerm, counter);
  }
}

function countArrangementOne(N) {
    const c = { count: 0 };
    const visited = []
    calculate(N, 1, visited, c);
    return c.count;
}

function calculate(N, pos, visited, c) {
    console.log(N)
    console.log(pos)
    console.log(c.count)
    console.log(visited)
    console.log('---------------')
    if (pos > N) {
      c.count = c.count+1
    }
    for (let i = 1; i <= N; i++) {
        if (!visited[i] && (pos % i == 0 || i % pos == 0)) {
            visited[i] = true;
            calculate(N, pos + 1, visited, c);
            visited[i] = false;
        }
    }
}


console.log(countArrangement(4)) // 8
console.log(countArrangementOne(4))
