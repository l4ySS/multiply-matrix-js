/*
Реализовать программу перемножение матриц. 
На вход даются две матрицы произвольной размерности n х m,
где n<=10, m<=10.
 */


function multiplyMatrix(A, B){
    let rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length, 
        colsB = B[0].length,
        C = [];
    if (colsA !== rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[i] = [];
    
    for (var k = 0; k < colsB; k++){
        for (var i = 0; i < rowsA; i++){ 
            var t = 0;
            for (var j = 0; j < rowsB; j++) t += A[i][j]*B[j][k];
            C[i][k] = t;
        }
    }
    return C;
}

function checkDim(dim){
    if (dim.length != 2 || 
        isNaN(dim[0]) ||
        isNaN(dim[1]) ||
        dim[0]<=0 ||
        dim[1]<=0)
        return true;
    else return false;
}

function getDim(id) {
    dim = document.getElementById(id).value.trim().split(/\s+/);
    dim[0] = parseInt(dim[0], 10);
    dim[1] = parseInt(dim[1], 10);
    if ( checkDim(dim)) return false;
    else return dim;
}
            
function getMatrix(rows, cols, id) {
    let matrix = new Array(rows);
    let numbers = document.getElementById(id).value.trim().split(/\s+/);
    if (numbers.length != (rows * cols)) return false;
            
    for (var i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
        for (var j = 0; j < cols; j++) {
            if ( isNaN(numbers[i*cols+j])) return false;
            matrix[i][j] = numbers[i*cols+j];
        }
    }
    console.log(matrix);
    return matrix;
}
     
function printMatrix(matrix, area){
    let str = "";
    for (var i=0; i<matrix.length; i++){
        for (var j=0; j<matrix[i].length; j++)
            str += matrix[i][j] + " ";
        str += '\n';
    }
    console.log(str);
    document.getElementById(area).value = str;
}

function start(){
    console.log("Started");
    if (getDim("dim1") == false) {
        console.log("Неверный ввод размерности матрицы 1.");
        alert("Неверный ввод размерности матрицы 1.");
        return false;
    } 

    dimA = getDim("dim1");
    rowsA = dimA[0];
    colsA = dimA[1];

    if (getMatrix(rowsA, colsA, "textarea1") == false) {
        console.log("Неверный ввод матрицы 1.");
        alert("Неверный ввод матрицы 1.");
        return false;
    }
    matrixA = getMatrix(rowsA, colsA, "textarea1");
            
    if (getDim("dim2") == false) {
    console.log("Неверный ввод размерности матрицы 2.");
    alert("Неверный ввод размерности матрицы 2.");
    return false;
    } 

    dimB = getDim("dim2");
    rowsB = dimB[0];
    colsB = dimB[1];

    if (getMatrix(rowsB, colsB, "textarea2") == false) {
        console.log("Неверный ввод матрицы 2.");
        alert("Неверный ввод матрицы 2.");
        return false;
    }

    matrixB = getMatrix(rowsB, colsB, "textarea2");
    if ((matrixC = multiplyMatrix(matrixA, matrixB)) !== false )
        printMatrix(matrixC, "result");
    else document.getElementById("result").value = "Ошибка";
}

function event1(){
    randomfill("dim1", "textarea1");
}

function event2(){
    randomfill("dim2", "textarea2");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    
function randomfill(input, textarea){
    if (getDim(input) == false) {
        console.log("Неверный ввод размерности матрицы.");
        alert("Неверный ввод размерности матрицы.");
        return false;
    } 
    let dim = getDim(input);
    let rows = dim[0];
    let cols = dim[1];

    matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
        for (let j = 0; j < cols; j++){
            matrix[i][j] = getRandomInt(10);
        }
    }
        
    printMatrix(matrix, textarea);
}
