/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}
var findTarget = function (root, k) {
  // pLeft => the most left node
  // pRight => the most right node
  // result = add the values
  // if retult = k => :)
  // else if resul < k, move left to the next inorder
  // else move rigth to the next inorderReverse
  // stop if letf and rigth is the same node // pRight.value < pLeft.value
  const sortedValues = [];
  inorder(root, sortedValues);
  let pLeft = sortedValues[0];
  let pRight = sortedValues[sortedValues.length - 1];

  while (pLeft < pRight) {
    const result = pLeft + pRight;
    if (result === k) {
      return true;
    }
    if (result < k) {
      pLeft++;
    } else {
      pRight--;
    }
  }
  return false;
};

function inorder(node, arr) {
  if (!node) {
    return;
  }
  inorder(node.left, arr);
  arr.push(node.value);
  inorder(node.right, arr);
}

const root = new BST(334);
root.insert(277)
root.insert(507)
root.insert(285)
root.insert(678)

console.log(findTarget(root, 1014))
