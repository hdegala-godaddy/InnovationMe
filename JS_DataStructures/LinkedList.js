let CommonUtils = require("./CommonUtils.js");

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
        this.prev = null;
    }
}

module.exports =  class LinkedList {
    constructor(...arrayTobeInserted) {
        this.firstNode = null;
        arrayTobeInserted.forEach((item) => this.insertInto(item));
    }

    insertInto(val) {
        let tempNode = new LinkedListNode(val);
        if (!this.firstNode) {
            this.firstNode = tempNode;
        }
        else {
            let temp;
            //Can be optimized by maintaining the parentNode and finalNode
            for (temp = this.firstNode; temp.next != null; temp = temp.next)
                ;
            temp.next = tempNode;
            tempNode.prev = temp;
        }
    }

    delete(val) {
        let valPrevNode;
        if (this.firstNode.value === val) {
            let temp = this.firstNode;
            this.firstNode = temp.next;
            this.firstNode ? this.firstNode.prev = null : null;
            return;
        }

        for (valPrevNode = this.firstNode; valPrevNode.next != null && valPrevNode.next.value != val; valPrevNode = valPrevNode.next)
            ;
        if (valPrevNode.next && valPrevNode.next.value === val) {
            let temp = valPrevNode.next;
            valPrevNode.next = temp.next;
            if (valPrevNode.next){
                valPrevNode.next.prev = valPrevNode;
            }
        }
        else {
            throw new CommonUtils.CustomException("Delete called for abscent value", 101);
        }
    }

    printLinkedList() {
        for (let temp = this.firstNode; temp != null; temp = temp.next) {
            console.log(" " + temp.value);
        }
    }

    makeItterator(){
        let currentNodeOfItterator = this.firstNode;

        return {
            next : function(){
                let retNode = currentNodeOfItterator;
                if (currentNodeOfItterator != null){
                    return currentNodeOfItterator = currentNodeOfItterator.next;
                }
            }
        }
    }

    forEach(callBack){
        for (let temp = this.firstNode; temp != null; temp = temp.next) {
            callBack(temp.value);
        }
    }
}


// let ll = new LinkedList();
// ll.insertInto(23);
// ll.insertInto(43);
// ll.printLinkedList();

// ll.delete(43);
// ll.delete(23);
// ll.printLinkedList();
// // ll.delete(43);
// // try{
// //     ll.delete(43);
// // }
// // catch(e){
// //     console.log(" Caught in fromt " + JSON.stringify(e));
// // }