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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    const odd = []
    const even = [root]

    while(odd.length || even.length) {
        const isProcessingEven = !!even.length
        if (isProcessingEven) {
            
            const isValid = processLevel(even, odd, Infinity, validateOdd)
            console.log('isEvenValid', isValid, even.map(e=>e.val))
            if(!isValid) {
                return false
            }
        } else {
            const isValid = processLevel(odd, even, -Infinity, validateEven)
            console.log('isOddValid', isValid, odd.map(e=>e.val))

            if(!isValid) {
                return false
            }
        }
          
    }
    return true
};

var validateEven = (node, lastValue) => {
    console.log('evenNodeValid',!node || (node.val > lastValue && node.val % 2 === 1), (node||{}).val, lastValue)
    return !node || (node.val > lastValue && node.val % 2 === 1) 
}
var validateOdd = (node, lastValue) => { 
    console.log('oddNodeValid', !node || (node.val < lastValue && node.val % 2 === 0), (node||{}).val, lastValue)

    return !node || (node.val < lastValue && node.val % 2 === 0)
}

var processLevel = (from, to, initialValue, validate) => {
    let lastValue = initialValue
    let isEvenLevel = initialValue === -Infinity
    while(from.length) {
        const node = isEvenLevel ? from.shift() : from.pop()
        const isValidLeft = validate(node.left, lastValue)
        if(!isValidLeft) {
            return false
        } else if(node.left){
            to.push(node.left)
            lastValue = node.left.val
        }
                
        const isValidRight = validate(node.right, lastValue)
        if(!isValidRight) {
            return false
        } else if(node.right){
            to.push(node.right)
            lastValue = node.right.val
        }
    }
    return true
}
