function Node(value, right = null, left = null) {
    return {
        value,
        right,
        left
    }
}


class Tree {

    constructor() {
        this.rootNode = null;
        this.nodeMap = new Map();
    }

    insert(value , left , right){
        let node = null;

        if (this.nodeMap.has(value)){
            node = this.nodeMap.get(value);
        } else {
            node = new Node(value, left, right);
            if (!this.rootNode) {
                this.rootNode = node;
            }
            this.nodeMap.set(value,node);
        }

        node.left = left;
        node.right = right;

        if (left ) !this.nodeMap.has(left) && this.insert(left);
        if (right ) !this.nodeMap.has(right) && this.insert(right);
    }    

    findRoute(value) {
        let path = [];
        let findPath = (nodeVal) => {
           if (!nodeVal) return false;
            let node = this.nodeMap.get(nodeVal);

            path.push(node);

            if (node.value !== value) {
                if (!findPath(node.left) && !findPath(node.right)) {
                    path.pop();
                    return false;
                } 
            }

            return true;
        }

        findPath(this.rootNode.value);
        return path;

    }

}

let tree = new Tree();

tree.insert(1,2,3);
tree.insert(2,4,5);
tree.insert(3,6,7);

console.log(tree);
console.log(tree.findRoute(7));

