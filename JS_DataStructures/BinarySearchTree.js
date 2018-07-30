
class Node {
    constructor(value, parent = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}


class BinarySearchTree {

    constructor(arr, comparator) {
        for (let nodeVal in arr) {
            this.insert(nodeVal, comparator);
        }
    }

    insert(nodeVal, comparator) {
        if (!this.root) {
            this.root = new Node(nodeVal);
            return;
        }
        else {
           findLocationToInsert(nodeVal,comparator);
        }
    }

    findLocationToInsert(nodeVal, root, comparator){
        if (nodeVal.val === root.val){
            return null;
        }
        else if (nodeVal.val < root.val){
            if (!root.left){
                root.left=nodeVal;
                nodeVal.parent = root;
                return;
            }
            findLocationToInsert(nodeVal,root.left,comparator);
        }
        else{
            if (!root.right){
                root.right =nodeVal;
                nodeVal.parent = root;
                return;
            }
            findLocationToInsert(nodeVal,root.left,comparator);
        }
    }
}

drawNode(root, 800, 100, 20