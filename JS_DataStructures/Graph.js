const Queue = require("./QueueImplementation.js");
const LinkedList = require("./LinkedList.js");
(function () {
   
    class Node {
        constructor(index, ...connectedNodes) {
            this.index = index;
            this.connectedNodes = new LinkedList(connectedNodes);
        }

        printNode() {
            console.log(this.index);
            this.connectedNodes.printLinkedList();
        }

    }

    class Graph {
        constructor() {
            this.nodeList = [];
        }
        insertNode(...connectedNodes) {
            this.nodeList.push(new Node(this.nodeList.length, ...connectedNodes));
        }
        printGraph() {
            for (let item of this.nodeList) {
                //console.log(item);
                item.printNode();
            }
        }


        breadthFirstSearch(callBack) {
            console.log("Breadth first search");
            let bfsQ = new Queue();
            let visited = [];
            let visitedIttr = [];
            bfsQ.enqueue(this.nodeList[0]);
            let _this = this;

            (function traverseBFS() {
                var latestElem = bfsQ.dequeue();
                if (latestElem && !visited[latestElem.index]) {
                    visited[latestElem.index] = true;
                    let connectedNodesItr = latestElem.connectedNodes.makeItterator();

                    latestElem.connectedNodes.forEach(function (element) {
                        bfsQ.enqueue(_this.nodeList[element]);
                    });
                    callBack(latestElem);
                    traverseBFS();
                }
            })();

            console.log ( " #### ittertive #### ");
            bfsQ.enqueue(this.nodeList[0]);
            (function traverseBFSItterative() {
                console.log("BFS Itterative");
                var latestElem = bfsQ.dequeue();
                while (latestElem){
                    if (!visitedIttr[latestElem.index]) {
                        visitedIttr[latestElem.index] = true;
                        latestElem.connectedNodes.forEach(function (element) {
                            bfsQ.enqueue(_this.nodeList[element]);
                        });
                        callBack(latestElem);
                    }
                    latestElem = bfsQ.dequeue();
                }
            })();

        }

        depthFirstSearch(callBack) {
            console.log("Depth First Search");
            let visited = [];
            let _this = this;

            (function traverseDFS(node) {
                if (node && !visited[node.index]) {
                    visited[node.index] = true;
                    callBack(node);
                    node.connectedNodes.forEach((elem) => {
                        traverseDFS(_this.nodeList[elem]);
                    });
                }
            })(this.nodeList[0]);
        }
    }

    let graph = new Graph();

    graph.insertNode(1, 2);
    graph.insertNode(3);
    graph.insertNode(5);
    graph.insertNode(4);
    graph.insertNode(6);
    graph.insertNode(7);
    graph.insertNode(8);
    graph.insertNode();
    graph.insertNode(9);
    graph.insertNode(3);

    graph.printGraph();

    console.log("BFS of this Tree");

    graph.breadthFirstSearch((elem) => {
        elem.printNode();
    });

    graph.depthFirstSearch((elem) => {
        elem.printNode();
    });

    //console.log(module);
})();
     //console.log(module);