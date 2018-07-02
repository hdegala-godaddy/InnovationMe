class QNode {
    constructor(val, next) {
        this.prev = null;
        this.value = val;
        this.next = next;
        if (next) {
            next.prev = this;
        }

    }
}

module.exports = class Queue {
    //Insert at Back, delete at front
    constructor() {
        this.front = null;
        this.back = null;
    }
    enqueue(val) {
        if (!this.front) {
            this.front = this.back = new QNode(val);
        }
        else {
            let newNode = new QNode(val, this.back);
            newNode.next = this.back;
            this.back = newNode;
        }
    }

    dequeue() {
        let temp = null;
        if (this.front === this.back) {
            temp = this.front;
            this.front = this.back = null;
        }
        else {
            temp = this.front;
            this.front = this.front.prev;
            this.front.next = null;
        }
        return temp ? temp.value : null;
    }

    printQ() {
        for (let item = this.back; item != null; item = item.next) {
            console.log(item.value);
        }
    }
}