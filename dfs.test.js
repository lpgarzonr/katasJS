const chai = require('chai');

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    const stack = [this]
		while(stack.length) {
			const node = stack.pop()
			const children = node.children
			for(let i=0; i<children.length; i++) {
				stack.push(children[i])
			}
			array.push(node.name)
		}
		return array
  }
}

it('Test Case #1', function () {
  const graph = new Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');
  chai.expect(graph.depthFirstSearch([])).to.deep.equal(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']);
});
