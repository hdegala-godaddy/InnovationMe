let CommonUtils = require("./CommonUtils.js");

class LinkedListNode{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}


module.exports= class LinkedList{
    constructor(){
        this.firstNode = null;
    }

    insertInto(val){
        let tempNode = new LinkedListNode(val);
        if (!this.firstNode){
            this.firstNode = tempNode;
        }
        else{
            let temp;
            //Can be optimized by maintaining the parentNode and finalNode
            for (temp = this.firstNode; temp.next != null; temp = temp.next)
                ;
            temp.next = tempNode;
        }
    }

    delete(val){
        let valPrevNode ;
        if (this.firstNode.value === val){
            let temp = this.firstNode;
            this.firstNode = temp.next;
            temp = null; 
            return;
        }

        for (valPrevNode = this.firstNode; valPrevNode.next != null && valPrevNode.next.value === val; valPrevNode = valPrevNode.next)
            ;
        if (valPrevNode.next && valPrevNode.next.value === val){
            let temp = valPrevNode.next;
            this.valPrevNode.next = temp.next;
            temp = null;
        }
        else{
            throw new CommonUtils.CustomException("Delete called for abscent value", 101);
        }
    }

    printLinkedList(){
        for (let temp = this.firstNode; temp != null; temp = temp.next){
            console.log(" " + temp.value);
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
// ll.delete(43);
// try{
//     ll.delete(43);
// }
// catch(e){
//     console.log(" Caught in fromt " + JSON.stringify(e));
// }