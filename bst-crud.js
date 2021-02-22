// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		if(value<this.value) {
			if(this.left) {
				this.left.insert(value)
			} else {
				this.left = new BST(value)
			}
		} else {
			if(this.right) {
				this.right.insert(value)
			} else {
				this.right = new BST(value)
			}
		}
    return this;
  }

  contains(value) {
		if(this.value === value) {
			return true
		}
		if(value < this.value) {
			return this.left ? this.left.contains(value) : false
		} 
		return this.right ? this.right.contains(value) : false
  }
	
  remove(value, parent) {
		if(!parent && !this.left && !this.right) {
			return this
		}
		if(value === this.value) {
      if(!this.left && !this.right) {
				if(parent.value > value) {
					parent.left = null
				} else {
					parent.right = null
				}
      } else if(!this.left) {
				this.value = this.right.value
				this.left = this.right.left
				this.right = this.right.right
      } else if(!this.right) {
        this.value = this.left.value
				this.right = this.left.right
				this.left = this.left.left
      } else {
				const valToRemove = this.right.nextInorderValue()
				this.value = valToRemove
				this.right.remove(valToRemove, this)
      }
    } else if(value < this.value && this.left) {
      this.left.remove(value, this)
    } else if(value > this.value && this.right) {
      this.right.remove(value, this)
    }
    // if its a leaf then this == null
		// if it has only left or right then this == this.left || this.right
		// if it has left and rigth then i go to next inorder, remove it and replace this.value
		// with next inorder value the
    return this;
  }
	
	nextInorderValue() {
		if(this.left) {
			return this.left.nextInorderValue()
		}
		return this.value
	}
}

// Do not edit the line below.
exports.BST = BST;


// const bst = new BST(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(2)
// bst.insert(5)
// bst.insert(13)
// bst.insert(22)
// bst.insert(1)
// bst.insert(14)
// bst.insert(12)
// bst.remove(10)
// bst.contains(15)

const bst = new BST(10)
bst.insert(5)
bst.remove(10)
