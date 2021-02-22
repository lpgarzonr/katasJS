function riverSizes(matrix) {
  const visited = {};
  const riverSizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const currentKey = `${i}:${j}`;
      const currentValue = matrix[i][j];
      if (currentValue && !visited[currentKey]) {
        const riverSize = getRiverSize(
          i,
          j,
          matrix.length - 1,
          matrix[0].length - 1,
          visited,
          matrix
        );
        riverSizes.push(riverSize);
      }
    }
  }
  return riverSizes;
}

function getRiverSize(i, j, lastIidx, lastJidx, visited, matrix) {
  let riverSize = 0;
  const stack = [{ i, j }];
  const key = `${i}:${j}`;
  visited[key] = true;

  while (stack.length) {
    const node = stack.pop();
    riverSize++;

    const topNode = { i: node.i - 1, j: node.j };
    const rightNode = { i: node.i, j: node.j + 1 };
    const bottomNode = { i: node.i + 1, j: node.j };
    const leftNode = { i: node.i, j: node.j - 1 };
    const neighbors = [topNode, rightNode, bottomNode, leftNode];

    for (let n = 0; n < 4; n++) {
      const neighbor = neighbors[n];
      const areIdxsInMatrix =
        neighbor.i >= 0 &&
        neighbor.i <= lastIidx &&
        neighbor.j >= 0 &&
        neighbor.j <= lastJidx;
      const notVisited = !visited[`${neighbor.i}:${neighbor.j}`];
      if (
        areIdxsInMatrix &&
        matrix[neighbor.i][neighbor.j] === 1 &&
        notVisited
      ) {
        stack.push(neighbor);
        const key = `${neighbor.i}:${neighbor.j}`;
        visited[key] = true;
      }
    }
  }
  return riverSize;
}

const input = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const testInput = [
  [1, 1],
  [1, 1],
];

riverSizes(testInput)
