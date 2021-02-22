/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var constructMaximumBinaryTree = function (nums) {
  // Get the idx of max value
  // create node with this value
  // Assig left with return of calling the same function with first part of the array
  // Assig right with return of calling the same function with second part of the array
  // stop recursion when array is empty
  if (!nums) {
    return null;
  }
  const maxIdx = getMaxIdx(nums);
  const node = TreeNode(nums[maxIdx]);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
  node.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1));
  return node;
};

function getMaxIdx(arr) {
  const max = Math.max(...arr);
  const maxIdx = arr.indexOf(max);
  return maxIdx;
}
const input = [3,2,1,6,0,5]
const result = constructMaximumBinaryTree(input)
