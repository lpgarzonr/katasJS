function rightSmallerThan(array) {
	const lastElement = array[array.length-1]
	const result = [0]
	const tree = new BST(lastElement)
	for(let i=array.length-2; i>=0; i--) {
		tree.insert(array[i], result, 0)
	}
	return result.reverse()
}

class BST {
	constructor(value) {
		this.v = value
		this.l = null
		this.r = null
		this.cl = 0
	}
	
	insert(val, result, acc) {
		if(val < this.v) {
			this.c = this.c + 1
			if(this.l) {
				this.l.insert(val, result, acc)
			} else {
				this.l = new BST(val)
				result.push(acc)
			}
		} else {
			let newAcc = acc + this.c
			if(val> this.v) {
				newAcc += 1
			}
			if(this.r) {
				this.r.insert(val, result, newAcc)
			} else {
				this.r = new BST(val, newAcc)
				result.push(newAcc)
			}	
		}
	}
}

rightSmallerThan([8, 5, 11, -1, 3, 4, 2])
