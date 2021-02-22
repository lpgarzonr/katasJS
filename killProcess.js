const pid =  [1, 3, 10, 5]
const ppid = [3, 0, 5, 3]
const kill = 3

const pid1 =  [3]
const ppid1 = [0]
const kill1 = 3
// Output: [5,10]
// Explanation: 
//            3
//          /   \
//         1     5
//              /
//             10

console.log(killProcessNaive(pid, ppid, kill))
console.log(killProcessWithTree(pid, ppid, kill))

function buildTree(pid, ppid, n) {
    const tree = {}
    for(let i =0; i< pid.length; i++) {
        console.log(n)
        n = n+1
        const parent = ppid[i]
        tree[parent] = tree[parent] ? [...tree[parent], pid[i]]: [pid[i]]
    }
    return tree
}


function killProcessNaive(pid, ppid, kill) {
    let processesToKill = [kill] //null
    const killed = [] //[5, 10]

    while(processesToKill.length) {
        killed.push(...processesToKill)
        const idxOfProcessToKill = ppid.map((pid, idx)=> processesToKill.includes(pid) ? idx: null)
        processesToKill = idxOfProcessToKill.map(i => pid[i]).filter(pid => pid !== undefined)
    }

    return killed
}

function killProcessWithTree(pid, ppid, kill) {
    let n =0
    const tree = buildTree(pid, ppid, n)
    console.log('por valorrr ', n)
    const killed = []
    traverseTree(kill, tree, killed)
    return killed
}

function traverseTree(node, tree, killed) {
    if(!node) {
        return
    }
    killed.push(node)
    const children = tree[node] || []
    for(let c=0; c<children.length; c++) {
        traverseTree(children[c], tree, killed) 
    }
}
