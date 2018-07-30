
//Hash Tree

class MaxHeap {

    constructor() {
        this.maxHeapArray = [];
        let index;
        for (index = 0; index < 10; index++) {
            this.insert(Math.floor(Math.random() * 1000));
        }
    }

    swap(firstIndx, secondIndx) {
        let temp = this.maxHeapArray[firstIndx];
        this.maxHeapArray[firstIndx] = this.maxHeapArray[secondIndx];
        this.maxHeapArray[secondIndx] = temp;
    }

    heapify() {
        let lastIndex = this.maxHeapArray.length - 1;
        if (lastIndex > 0) {
            while (lastIndex > 1) {
           //     console.log("\t \t \t \t Called with lastIndex: " + lastIndex);
                if (this.maxHeapArray[lastIndex / 2] < this.maxHeapArray[lastIndex]) {
      //              console.log("first: ", this.maxHeapArray[lastIndex / 2], " second: ", this.maxHeapArray[lastIndex]);
                    this.swap(lastIndex / 2, lastIndex);
                }
                lastIndex = lastIndex / 2;
            }
        }
    }

    insert(newNumber) {
        this.maxHeapArray.push(newNumber);
        this.heapify();
    }

    printHeap() {
        console.log(this.maxHeapArray);

        let totalHeight = (Math.ceil(Math.log2(this.maxHeapArray.length))) - 1;

        console.log("TotoalHeight: " + (totalHeight));
        let numberOfElementsAtlastHt = Math.pow(2, totalHeight + 1);

        let totalItemsCnt = 0;
        let initialRootStartingPt = (numberOfElementsAtlastHt * 2 + numberOfElementsAtlastHt*3) / 2 + 1;

        let totalItems = this.maxHeapArray.length;
        for (let height = 0; height < totalHeight + 1; height++) {
            let item = height > 0 ? height * 2 - 1 : 0;
            let maxElementIndxAtHt = Math.pow(2, height + 1) - 2;
            let startingPtForElementsAtThisHt = initialRootStartingPt - (2*height + 3);
            let spaceIndex = 0;
            let bufferString = "";
            
            for (spaceIndex = 0; spaceIndex < startingPtForElementsAtThisHt; spaceIndex++) {
                bufferString = bufferString.concat(" ");
            }
            bufferString = bufferString.concat(this.maxHeapArray[item]);
            totalItemsCnt++;
            item++;
            for ( ; totalItemsCnt < totalItems && item <= maxElementIndxAtHt; item++ , totalItemsCnt++) {
                // if (item === maxElementIndxAtHt / 2)
                //     {
                //         bufferString = bufferString.concat("   ");
                //     }
                bufferString = bufferString.concat("   ",this.maxHeapArray[item]);
            }
            console.log(bufferString);
        }

    }

}

var heapArray = new MaxHeap();
heapArray.printHeap();