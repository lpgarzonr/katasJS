const chai = require("chai");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

it("Test Case #1", function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

  chai.expect(validateBst(root)).to.deep.equal(true);
});

function validateBst(tree) {
  return validateBstRec(tree, [-Infinity]);
}

function validateBstRec(node, visited) {
  if (!node) {
    return true;
  }
  const isLeftValid = validateBstRec(node.left, visited);
  if (!isLeftValid) {
    return false;
  }
  const lastVisitedVal = visited[visited.length - 1];
  const isCurrentValid = lastVisitedVal < node.value;
  if (!isCurrentValid) {
    return false;
  }
  visited.push(node.value);
  return validateBstRec(node.right, visited);
}
