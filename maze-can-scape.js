var isEscapePossible = function (blockedArray, source, target) {
  const stack = [source];
  const visited = {};
  const blocked = buildBlockedHash(blockedArray);

  while (stack.length) {
    const node = stack.pop();
    if (node[0] === target[0] && node[1] === target[1]) {
      return true;
    }

    const neighbors = getNeighbors(node);
    for (let i = 0; i < 4; i++) {
      const neighbor = neighbors[i];
      const key = `${neighbor[0]}:${neighbor[1]}`;
      const isOutside =
        neighbor[0] < 0 ||
        neighbor[0] > 9999 ||
        neighbor[1] < 0 ||
        neighbor[1] > 9999;
      const canVisit = !visited[key] && !blocked[key] && !isOutside;
      if (canVisit) {
        visited[key] = true;
        stack.push(neighbor);
      }
    }
  }
  return false;
};

function getNeighbors(node) {
  const left = [node[0], node[1] - 1];
  const right = [node[0], node[1] + 1];
  const top = [node[0] - 1, node[1]];
  const bottom = [node[0] + 1, node[1]];

  return [left, right, top, bottom];
}

function buildBlockedHash(blocked) {
  const blk = {};
  for (let i = 0; i < blocked.length; i++) {
    blk[`${blocked[i][0]}:${blocked[i][1]}`] = true;
  }
  return blk;
}

console.log(
  isEscapePossible(
    [],
    [0,0],
    [9999,9999]
  )
);
