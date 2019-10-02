/**
 * 1  2  3  10
 * 4  5  6  11
 * 7  8  9  12
 * 13 14 15 16
 */


 function printSpiralMatrix(matrix) {
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;

    while (startRow <= endRow && startCol <= endCol ) {
    
    for (let j = startCol;j<= endCol ;j++)
        console.log(matrix[startRow][j]);
    
    for (let i = startRow + 1; i <= endRow; i++)
        console.log(matrix[i][endCol]);

    for (let j = endCol - 1; j >= startCol; j-- )
        console.log(matrix[endRow][j]);  
    
    for (let i =  endRow - 1; i > startRow; i-- )
        console.log(matrix[i][startCol]);

        startRow++; endRow--;
        startCol++; endCol--;
    }
    ;  
 }


 let matrix = [
                [1,2,3,10,20],
                [4,5,6,11, 21],
                [7,8,9, 12, 22],
                [13,14,15,16, 23],
                [24,25,26,27,28]
              ];

printSpiralMatrix(matrix);

