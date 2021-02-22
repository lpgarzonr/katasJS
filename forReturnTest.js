var canFormNum = function (num, pieces, lastVisitedIdxInPiece) {
  for (let idx = 0; idx <= pieces.length; idx++) {
    const piece = pieces[idx];
    const numIdx = piece.indexOf(num);
    if (numIdx >= 0) {
      const yes =
        !lastVisitedIdxInPiece[`${idx}`] ||
        lastVisitedIdxInPiece[`${idx}`] + 1 === numIdx;

      if (yes) {
        lastVisitedIdxInPiece[`${idx}`] = numIdx;
        return true;
      }
    }
  }
  return false;
};

var canFormArray = function (arr, pieces) {
  const hash = buildHash(pieces) // { 85: [85]}
  let arrIdx = 0
  
  while(arrIdx < arr.length) {
    const num = arr[arrIdx]
    if(!hash[num]) {
      return false
    }

    const piece = hash[num]
    if(piece.length === 1) {
      arrIdx++
      continue
    }

    for (let pIdx = 0; pIdx < piece.length; pIdx++) {
      if (piece[pIdx] !== arr[arrIdx]) {
        return false
      }
      arrIdx++
    }
  }
  
  return true
};

function buildHash(pieces) {
  const hash = {}
  for (const piece of pieces) {
    hash[piece[0]] = piece
  }
  return hash
}

const arr2 = [85];
const pieces2 = [[85]];
const arr1 = [1, 2, 3];
const pieces1 = [[2], [1, 3]];
const arr = [91,4,64,78]
const pieces = [[78],[4,64],[91]]
console.log(canFormArray(arr, pieces))
console.log(canFormArray(arr1, pieces1))
console.log(canFormArray(arr2, pieces2))
