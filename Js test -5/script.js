// 1. Transpose of a Matrix Description: Convert rows to columns and vice versa. Input:
// [
// [1, 2],
// [3, 4],
// [5, 6]
// ]
// Output:
// [
// [1, 3, 5],
// [2, 4, 6]
// ]


const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let result = [];

let i = 0;
while (i < matrix[0].length) {
  let row = [];
  let j = 0;
  while (j < matrix.length) {
    row.push(matrix[j][i]);
    j++;
  }
  result.push(row);
  i++;
}

console.log(result);




// 2. Diagonal Sum of Square Matrix Description: Find the sum of both main diagonals. Input:
// [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]
// Output: 25 (1+5+9 + 3+5+7 – 5 (counted twice))


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = matrix.length;
let sum = 0;

let i = 0;
while (i < n) {
  sum += matrix[i][i];           
  sum += matrix[i][n - 1 - i];   
  i++;
}


if (n % 2 === 1) {
  let mid = Math.floor(n / 2);
  sum -= matrix[mid][mid];
}

console.log(sum);




// 3. Spiral Print of Matrix Description: Print elements in spiral order. Input:
// [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]
//Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];

let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;

while (top <= bottom && left <= right) {

    for (let i = left; i <= right; i++) {
        console.log(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        console.log(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
        for (let i = right; i >= left; i--) {
            console.log(arr[bottom][i]);
        }
        bottom--;
    }

    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            console.log(arr[i][left]);
        }
        left++;
    }
}





// 4. Search in 2D Matrix Description: Return true if a given element exists. Input: matrix + target = 5
// [
// [1, 2, 3],
// [4, 5, 6]
// ]
// Output: true

const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
const target = 5;

let found = false;

let row = 0;
while (row < matrix.length) {
  let col = 0;
  while (col < matrix[row].length) {
    if (matrix[row][col] === target) {
      found = true;
      break;
    }
    col++;
  }
  if (found) break;
  row++;
}

console.log(found);





// 5. Rotate Matrix by 90 Degrees Clockwise Description: Rotate a square matrix in-place. Input:
// [
// [1, 2],
// [3, 4]
// ]
// Output:
// [
// [3, 1],
// [4, 2]
// ]

let matrix = [
    [1, 2],
    [3, 4]
];

let i = 0;
while (i < matrix.length) {
    let j = i + 1;
    while (j < matrix[0].length) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
        j++;
    }
    i++;
}

i = 0;
while (i < matrix.length) {
    matrix[i].reverse();
    i++;
}

console.log(matrix);





// 6. Count Zeros and Ones in a Matrix Description: Count the number of 0s and 1s in a 2D matrix. Input:
// [
// [1, 0, 1],
// [1, 1, 0],
// [0, 0, 1]
// ]
// Output:
// { zero: 4, one: 5 }


const matrix = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 0, 1]
];

let zero = 0;
let one = 0;

let row = 0;
while (row < matrix.length) {
  let col = 0;
  while (col < matrix[row].length) {
    if (matrix[row][col] === 0) {
      zero++;
    } else if (matrix[row][col] === 1) {
      one++;
    }
    col++;
  }
  row++;
}

console.log({ zero: zero, one: one });





// 7. Set Matrix Zeros Description: If any element is 0, set its entire row and column to 0. Input:
// [
// [1, 2, 3],
// [4, 0, 6],
// [7, 8, 9]
// ]
// Output:
// [
// [1, 0, 3],
// [0, 0, 0],
// [7, 0, 9]
// ]




// 8. Count Elements Greater than a Threshold Description: Count how many elements are greater than a given number k. Input: matrix + k = 5
// [
// [2, 5, 7],
// [1, 8, 3]
// ]
// Output: 2 (7 and 8)

const matrix = [
  [2, 5, 7],
  [1, 8, 3]
];
const k = 5;

let count = 0;

let row = 0;
while (row < matrix.length) {
  let col = 0;
  while (col < matrix[row].length) {
    if (matrix[row][col] > k) {
      count++;
    }
    col++;
  }
  row++;
}

console.log(count);





// 9. Find Row with Maximum Sum Description: Return the row which has the highest sum of elements. Input:
// [
// [1, 2, 3],
// [4, 5, 6],
// [0, 1, 1]
// ]
// Output: [4, 5, 6]


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [0, 1, 1]
];

let maxSum = 0;
let maxRow = [];

let i = 0;
while (i < matrix.length) {
    let sum = 0;
    let j = 0;
    while (j < matrix[i].length) {
        sum += matrix[i][j];
        j++;
    }

    if (sum > maxSum) {
        maxSum = sum;
        maxRow = matrix[i];
    }

    i++;
}

console.log(maxRow);





// 10. Boundary Elements of a Matrix Description: Print all boundary (outer layer) elements of a matrix. Input:
// [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]
// Output: [1, 2, 3, 6, 9, 8, 7, 4]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let result = [];

let top = 0;
let bottom = matrix.length - 1;
let left = 0;
let right = matrix[0].length - 1;


let i = left;
while (i <= right) {
  result.push(matrix[top][i]);
  i++;
}
top++;

i = top;
while (i <= bottom - 1) {
  result.push(matrix[i][right]);
  i++;
}
right--;

i = right;
while (i >= left) {
  result.push(matrix[bottom][i]);
  i--;
}
bottom--;

i = bottom;
while (i >= top) {
  result.push(matrix[i][left]);
  i--;
}
left++;

console.log(result);


