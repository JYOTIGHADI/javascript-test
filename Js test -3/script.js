// Q1 (Updated): Find the First Non-Repeating Element in an Array
// Input: [4, 5, 1, 2, 0, 4, 1, 0]
// Output: 5
// 🧠 Use an object to store frequency, then return the first element with frequency 1


function firstNonRepeating(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
      return arr[i];
    }
  }

  return -1; 
}

const input = [4, 5, 1, 2, 0, 4, 1, 0];
const output = firstNonRepeating(input);
console.log(output); 





// 🔹 Q2. Check if Two Objects Have the Same Keys and Values
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 2, a: 1 };
// Output: true
// 🧠 Order doesn’t matter. Compare keys and values.


function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length)
     return false;

  for (let key of keys1) {
    if (!(key in obj2)) 
        return false;
    if (obj1[key] !== obj2[key]) 
        return false;
  }

  return true;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 2, a: 1 };
console.log(areObjectsEqual(obj1, obj2)); 





// 🔹 Q3. Merge Two Arrays and Remove Duplicates
// Input: [1, 2, 3], [2, 3, 4]
// Output: [1, 2, 3, 4]
// 🧠 Use Set or object keys for uniqueness


let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let combined = arr1.concat(arr2);

let unique = [...new Set(combined)];

console.log(unique); 





// Q4 (Updated): Convert an Array of Objects into a Single Object
// let arr = [
// { id: 1, name: "A" },
// { id: 2, name: "B" }
// ];
// Output:{
//     1: "A",
//     2: "B"
// }
// 🧠 Use a loop or reduce() to convert array into object with id as key


let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

let result = arr.reduce(function(acc, curr) {
  acc[curr.id] = curr.name;
  return acc;
}, {});

console.log(result);





// 🔹 Q5. Find a Pair With Given Sum (Using Object Map)
// Input: [1, 2, 4, 7], Target = 6
// Output: true (Because 2 + 4 = 6)
// 🧠 Use object for complement lookup


let array = [1, 2, 4, 7];
let target = 6;
let map = {};
let found = false;

for (let i = 0; i < array.length; i++) {
  let num = array[i];
  let match = target - num;

  if (map[match]) {
    found = true;
    break;
  }

  map[num] = true;
}
console.log(found); 





// 🔹 Q6. Find Missing Number in Sorted Array (linear Search)
// Input: [1, 2, 3, 5, 6]
// Output: 4
// 🧠 Use binary approach to find the missing number


let arrys = [1, 2, 3, 5, 6];

function findMissingLinear(arrys) {
  for (let i = 0; i < arrys.length; i++) {
    if (arrys[i] !== i + 1) {
      return i + 1;
    }
  }
  return -1; 
  
}

console.log(findMissingLinear(arrys)); 




// 🔹 Q7. Convert Object to Array of Key-Value Pairs
// let obj = { a: 1, b: 2 }
// Output: [["a", 1], ["b", 2]]
// 🧠 Use Object.entries()


let obj = { a: 1, b: 2 };

let results = Object.entries(obj);

console.log(results);




// 🔹 Q8. Bitwise Operation: Count Number of 1s in Binary
// Input: 9
// Binary: 1001
// Output: 2
// 🧠 Use bitwise AND & and right shift >>


let num = 9;
let count = 0;

while (num > 0) {
  count += num & 1;
  num = num >> 1;
}

console.log(count); 





// 🔹 Q9. Binary Search in Sorted Array
// Input: [1, 3, 5, 7, 9], Target = 5
// Output: 2 (Index of 5)
// 🧠 Implement binary search manually


function binarySearch(arry, targets) {
  let start = 0;
  let end = arry.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arry[mid] === targets) {
      return mid; 
    }

    if (arry[mid] < targets) {
      start = mid + 1;
    } else {
      end = mid - 1; 
    }
  }

  return -1; 
}


let arry = [1, 3, 5, 7, 9];
let targets = 5;
console.log(binarySearch(arry, targets)); 





// 🔹 Q10. Group Elements by Frequency
// Input: [1, 1, 2, 3, 3, 3]
// Output:
// {
// "1": 2,
// "2": 1,
// "3": 3
// }
// 🧠 Use object to group and count occurrences


let Array = [1, 1, 2, 3, 3, 3];
let freq = {};

for (let i = 0; i < Array.length; i++) {
  let num = Array[i];

  if (freq[num]) {
    freq[num] = freq[num] + 1;
  } else {
    freq[num] = 1;
  }
}

console.log(freq);

