

(function(){
    function Node(value, connectedNodes){
        return {
            value,
            connectedNodes
        }
    }

    class Graph{
        constructor(){
            this.nodeMap = new Map();
        }

        insert(val, connectedNodes = []){
            if (!this.nodeMap.has(val)) {
                let node = new Node(val, connectedNodes);
                this.nodeMap.set(val, node);
                
            }
            else if (connectedNodes.length) {
                let node = this.nodeMap.get(val);
                 node.connectedNodes = connectedNodes;
            }

            connectedNodes.forEach((item) => {
                this.insert(item);
            });

        }
        
        dft(searchElement, parentVal){

            let context = this;
            let visitedNodes = new Map();
            let route = [];
            (function search(node){
                
                if (visitedNodes.has(node.value)){
                    return;
                } else {
                    visitedNodes.set(node.value, node);
                    route.push(node);
                    let found = false;
                    if (node.value === searchElement){
                        return true;
                    }

                    for(let newNodeVal of node.connectedNodes) {
                        found = search(context.nodeMap.get(newNodeVal));
                        if (found) break; 
                    }

                    if (!found) {
                        route.pop();
                    }

                    return found;
                }

            })(this.nodeMap.get(parentVal));

            return route;
        }
    }
    let graph = new Graph();
    graph.insert(1,[2,3,4,7,8]);
    graph.insert(2,[5,7]);
    graph.insert(7,[8,9])
    console.log(JSON.stringify(Array.from(graph.nodeMap)));
    console.log(graph.dft(8,1));
})()

