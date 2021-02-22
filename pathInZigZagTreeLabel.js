var pathInZigZagTree = function(label) {
    // every level has pow(2, level)
    // find label level
    // find label parent position
    // find topLevelNodes = [] // take into account direction
    // 
    if(label===1) {
        return [1]
    }
    const path = [label]
    const level = getLevel(label)
    pathInZigZagTreeRec(label, level, path)
    return path.reverse()
};

var pathInZigZagTreeRec = function(label, level, path) {
    if(label === 1) {
      return
    }
    const parentLabel = getParentLabel(label, level)
    const parentLabel = Math.pow(2, level) - 1 - idx
    path.push(parentLabel)
    pathInZigZagTreeRec(parentLabel, level-1, path)
};

// idx 1
var getLevel = (num) => {
    let level = 1
    let maxValue = 2   
    while(num > maxValue-1) {
        level++
        maxValue = Math.pow(2, level) 
    }
    return level
}

var getParentLabel= (label, level) => {
    // const parentLabels = getLabelsFromLevel(level-1)
    const minLevelValue = Math.pow(2, level-1)
    const parentIdx = Math.floor((label- minLevelValue) / 2)
    return Math.pow(2, level-1) - 1 - parentIdx
}

var getLabelsFromLevel = (level) => {
    const labels = []
    const min = Math.pow(2, level-1)
    const max = Math.pow(2, level) - 1
    for(let i = max; i>=min; i--) {
        labels.push(i)
    }
    return labels
    //return level % 2 === 0 ? labels.reverse() : labels
}

console.log(pathInZigZagTree(14))
console.log(pathInZigZagTree(26))
