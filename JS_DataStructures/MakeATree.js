function Node(val) {
    return {
        value: val,
        left: null,
        right: null,
        level: -1
    };
}

// var rootNode = new Node(23);
// console.log(rootNode);
var canvasCtx = null;

class CanvasTreePrinting {

    constructor(){
        this.canvasCtx = document.getElementById("treeCanvas");
        this.ctx = canvasCtx.getContext("2d");
    }
    
    // ctx.moveTo(0, 0);
    // ctx.lineTo(100, 100);
    // ctx.stroke();

    drawNode(node, x, y, radius) {
        if (!node) {
            return;
        }
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);

        this.ctx.stroke();
        this.ctx.font = "14px Arial";
        this.ctx.fillText(node.value, x - 15, y + 10);

        if (node.left) {
            var leftNodeX = x - (200 / (node.level + 1));
            this.ctx.moveTo(x, y + radius);
            this.ctx.lineTo(leftNodeX, y + 100 - radius);
            this.ctx.stroke();
            drawNode(node.left, leftNodeX, y + 100, radius);
        }
        if (node.right) {
            var rightNodeX = x + (200 / (node.level + 1));
            this.ctx.moveTo(x, y + radius);
            this.ctx.lineTo(rightNodeX, y + 100 - radius);
            this.ctx.stroke();
            drawNode(node.right, rightNodeX, y + 100, radius);
        }

    }

    // function insertInto(node, val, direction) {
    //     var tempNode = new Node(val);
    //     tempNode.level = node.level + 1;
    //     direction == "right" ? node.right = tempNode : node.left = tempNode;

    //     return tempNode;
    // }

    // var root = new Node(3);
    // root.level = 0;

    // leftSubTree1 = insertInto(root, -5, "left");
    // rightSubTree1 = insertInto(root, 15, "right");
    // leftSubTree_l1l2 = insertInto(leftSubTree1, -15, "left");
    // rightSubtree_l1r2= insertInto(leftSubTree1, -25, "right");
    // leftSubTree_r1l2 = insertInto(rightSubTree1, -35, "left");
    // rightSubtree_r1r2= insertInto(rightSubTree1, -45, "right");
    // drawNode(root, 800, 100, 20);
};