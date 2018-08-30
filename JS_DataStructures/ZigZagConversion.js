



    function printMatrix(zigZag, numOfRows, numOfCols){
        for (let indx = 0; indx < numOfRows; indx++){
            for (let colIndx = 0; colIndx < numOfCols; colIndx++){
                console.log("\t" + zigZag[indx][colIndx]);
            }
            console.log("\n");
        }
    }

    

    function combineStr1(zigZag, numOfRows){
        let totalStr = "";
        for (let indx = 0; indx < numOfRows; indx++){
            totalStr = totalStr.concat(zigZag[indx].join(""));
        }
        console.log(totalStr);
    }

    function combineStr(zigZag, numOfRows){
        let totalStr = "";
        for (let indx = 0; indx < numOfRows; indx++){
            totalStr = totalStr.concat(zigZag[indx]);
        }
        console.log(totalStr);
    }

    
    function convertStr1(srcStr, numberOfrows){
        if (!srcStr || numberOfrows === 1 || srcStr.length < numberOfrows){
            return srcStr;
        }

        const down = 1;
        const up = -1;
        let zigZagArr = [];
        let row = col = 0;

        let direction = down;
        let src =srcStr.split("");
    
        for (let strIndx = 0; strIndx < src.length; strIndx++ ){

            !zigZagArr[row] ? zigZagArr.push([]):"";
            zigZagArr[row][col] = src[strIndx];

            if (direction === down) {
                if (row === numberOfrows - 1) {
                    direction = up;
                    row--;
                    col++;
                } else {
                    row++;
                }
            } else {
                if (row === 0) {
                    direction = down;
                    row++;
                } else {
                    row--;
                    col++;
                }
            }
        }
        return combineStr(zigZagArr, numberOfrows);
    }

    function convertStr(srcStr, numberOfrows){
        if (!srcStr || numberOfrows === 1 || srcStr.length < numberOfrows){
            return srcStr;
        }

        const down = 1;
        const up = -1;
        let zigZagArr = [];
        let row = col = 0;

        let direction = down;
        let src =srcStr.split("");
    
        for (let strIndx = 0; strIndx < src.length; strIndx++ ){

            !zigZagArr[row] ? zigZagArr.push(""):"";
            zigZagArr[row]  = zigZagArr[row] + src[strIndx];

            if (direction === down) {
                if (row === numberOfrows - 1) {
                    direction = up;
                    row--;
                } else {
                    row++;
                }
            } else {
                if (row === 0) {
                    direction = down;
                    row++;
                } else {
                    row--;
                }
            }
        }
        return combineStr(zigZagArr, numberOfrows);
    }

    convertStr("PAYPALISHIRING", 3);
    convertStr("PAYPALISHIRING", 4);