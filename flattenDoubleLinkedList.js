/**
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  // copy head in flattenhead
  // iterate untill node.next === null
  // if node has child flatten of the child (i will need the head and the tail)
  // tmp = node.next
  // child head.prev = node and node.next = childhead
  // child.tail.next = tmp.next
  flattAndGetTail(head);
  return head;
};

function flattAndGetTail(head) {
  if (!head) return null;
  let node = head;

  while (node) {
    if (node.child) {
      const tail = flattAndGetTail(node.child);
      if (tail) {
        tail.next = node.next;
        if (node.next) {
          node.next.prev = tail;
        }
      }
      node.next = node.child;
      node.child.prev = node;
      node.child = null;

      node = tail;
    }
    if (!node.next) {
      break;
    }
    node = node.next;
  }
  return node;
}


/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flattenDFS = function(head) {
    const stack = [head]
    const arr = []
    while(stack.length) {
        const node = stack.pop()
        arr.push(node.val)
        if(node.next) {
            stack.push(node.next)
        }
        if(node.child) {
           stack.push(node.child)
        }
    }
    for(let i=1; i< arr.length; i++) {
        const node = arr[i]
        node.prev = arr[i-1]
        node.next = arr[i+1] || null
        node.child = null
    }

    return head
};
