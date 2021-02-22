const chai = require("chai");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.right = new BST(10);
root.right = new BST(15);
validateBst(root);

function validateBst(tree) {
  return validateBstRec(tree, [-Infinity], [null], null);
}

function validateBstRec(node, visited, dirs, dir) {
  if (!node) {
    return true;
  }
  const isLeftValid = validateBstRec(node.left, visited, dirs, 'left');
  if (!isLeftValid) {
    return false;
  }
  const lastVisitedVal = visited[visited.length - 1];
  const isCurrentValid = lastVisitedVal < node.value || (dir === 'right' && lastVisitedVal <= node.value);
  if (!isCurrentValid) {
    return false;
  }
  visited.push(node.value);
  dirs.push(dir);
  return validateBstRec(node.right, visited, dirs, 'right');
}
