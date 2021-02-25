// To Do 1
// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
    if (num > 0) {
        return parseInt(num) + rSigma(parseInt(num) - 1);
    }
    else {
        return 0;
    }
}

console.log(rSigma(1));
console.log(rSigma(2));
console.log(rSigma(2.5));
console.log(rSigma(5));
console.log(rSigma(327));

// Recursive Factorial
// Given num, return the product of ints from 1 up to num.
// If less than zero, treat as zero. If not an integer, truncate.
// Experts tell us 0! is 1. rFact(3) = 6 (1*2*3).
// Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFact(num) {
    if (parseInt(num) > 1) {
        return parseInt(num) * rFact(parseInt(num) - 1);
    }
    else {
        return 1;
    }
}
console.log(rFact(0));
console.log(rFact(1));
console.log(rFact(3));
console.log(rFact(6.5));
console.log(rFact(5));
console.log(rFact(27));

// Bonus Challenge (Optional)
// Flood Fill
// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color.
// We change the image as if we painted a canvas: a two-dimensional array of integers,
// where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas;
// each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension.
// You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood
// (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as
// the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.

function floodFill(canvas, startXY, newColor) {
    var x = startXY[0];
    var y = startXY[1];
    var oldColor = canvas[x][y];
    canvas[x][y] = newColor;

    if (x > 0 && canvas[x-1][y] == oldColor) {
        floodFill(canvas, [x-1, y], newColor);
    }
    if (y > 0 && canvas[x][y-1] == oldColor) {
        floodFill(canvas, [x, y-1], newColor);
    }
    if ((x < canvas.length - 1) && canvas[x+1][y] == oldColor) {
        floodFill(canvas, [x+1, y], newColor);
    }
    if ((y < canvas[x].length) && canvas[x][y+1] == oldColor) {
        floodFill(canvas, [x, y+1], newColor);
    }
    return canvas
}

var canvas2D = [[3,2,3,4,3],
                [2,3,3,4,0],
                [7,3,3,5,3],
                [6,5,3,4,1],
                [1,2,3,3,3], ];

var newCanvas = floodFill(canvas2D, [2, 2], 1);
for (var i = 0; i < newCanvas.length; i++) {
    console.log(newCanvas[i]);
}

var bigcanvas2D = [
[3,2,3,1,1,1,3,4,2,3],
[3,2,3,1,1,2,3,4,2,3],
[1,1,1,1,1,2,3,4,2,3],
[3,2,3,1,1,1,1,1,1,3],
[3,1,3,1,2,2,3,4,2,3],
[3,2,3,1,1,2,3,4,2,3],
[3,1,4,1,1,1,1,1,1,3],
[3,2,3,1,2,2,3,4,1,3],
[3,2,3,1,4,2,1,1,1,3],
[3,2,3,1,2,2,1,1,1,1],];

var otherCanvas = floodFill(bigcanvas2D, [2, 2], 0);
for (var i = 0; i < otherCanvas.length; i++) {
    console.log(otherCanvas[i]);
}