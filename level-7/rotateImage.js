// You are given an n x n 2D matrix that represents an image.Rotate the image by 90 degrees(clockwise).
rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())
