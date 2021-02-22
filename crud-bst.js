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

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (this.left && value < this.value) {
      return this.left.contains(value);
    }
    if (this.right && value >= this.value) {
      return this.right.contains(value);
    }
    return false;
  }

  remove(value, parent = null) {
    if (value === this.value) {
      if (!this.left && !this.right) {
        // is leaf
        if (!parent) {
          // don nothing is single node tree
        } else if (parent.value <= this.value) {
          parent.right = null;
        } else {
          parent.left = null;
        }
      } else if (!this.right) {
        this.value = this.left.value;
        this.right = this.left.right;
        this.left = this.left.left;
      } else if (!this.left) {
        this.value = this.right.value;
        this.right = this.right.right;
        this.left = this.right.left;
      } else {
        let nextMostLeft = this.right.nextInorder();
        this.value = nextMostLeft.value;
        this.right.remove(nextMostLeft.value, this);
      }
    } else if (this.left && value < this.value) {
      this.left.remove(value, this);
    } else if (this.right && value > this.value) {
      this.right.remove(value, this);
    }

    // Find value
    // if its a leaf then this = null
    // only left or only right this = left or right
    // if left and right, find the most next left from the right
    // replace it (just the value) with current and make most to the left = null
    return this;
  }

  nextInorder() {
    let node = this;
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}
const root = new BST(10);

/*root.insert(5)
root.insert(15)
root.insert(2)
root.insert(5)
root.insert(13)
root.insert(22)
root.insert(1)
root.insert(14)
root.insert(12)
root.remove(10)
root.contains(15) */

const root1 = new BST(10);
root1.insert(5)
root1.insert(15)
root1.insert(2)
root1.insert(5)
root1.insert(13)
root1.insert(22)
root1.insert(1)
root1.insert(14)
root1.insert(12)
root1.remove(5)
root1.remove(5)
root1.remove(12)
root1.remove(13)
root1.remove(14)
root1.remove(22)
root1.remove(2)
root1.remove(1)

