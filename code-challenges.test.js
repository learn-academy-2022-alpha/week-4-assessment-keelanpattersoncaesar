// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleDraw", () => {

  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    expect(shuffleDraw(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    expect(shuffleDraw(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
  });
});

// ReferenceError: shuffleDraw is not defined 
// GOOD FAIL!


// b) Create the function that makes the test pass.

// PC: 
// make function named shuffleDraw
  // takes in an array
// .shift() to remove the first value of array
// iterate through the length of the array
  // i-- for taking values out
// use Math.floor(Math.random() to select random index position
//  random number
  //
// return it


function shuffleDraw (array){
  array.shift()
  for (var i = array.length - 1; i > 0; i--){
    var rand = Math.floor(Math.random() * (i + 1));
    var holder = array[i]
    array[i] = array[rand]
    array[rand] = holder
    
  } 
  return array
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]

describe("minMax", () => {

  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

// ReferenceError: minMax is not defined :)

// b) Create the function that makes the test pass.

// PC:
// create function named minMax
  // takes an array
// create empty placeholder array
// use Math.min to find lowest value
  // .push() to empty array
// use Math.max to find highest value
  // .push() to empty array 
// for loop to iterate through array
// .filter out bad values
// return placeholder array

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

function minMax(array){
  var a = []
  for(i = 0; i < array.length; i++) {
    a.push(Math.min(array));
    a.push(Math.max(array));
  }
  let b = a.filter(number => number)
  return b
}


// Results so far:

// expect(received).toEqual(expected) // deep equality

// - Expected  - 4
// + Received  + 1

// - Array [
// -   -8,
// -   90,
// - ]
// + Array []

// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

describe("dblArrayFn", () => {

  it("that takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    expect(dblArrayFn(testArray1, testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]))
  })
})

// GOOD FAIL:  ReferenceError: dblArrayFn is not defined

// PC:
// create fn names dblArrayFn
  // takes in 2 array
// concat testArray1 to testArray2
// sort the array
// for loop over new array 
  // check for duplicate values with iteration
    // if value === value at [i], filter it out
// return array

// // b) Create the function that makes the test pass

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

function dblArrayFn(testArray1, testArray2) {
  testArray1.concat(testArray2)
  testArray1.sort((a, b) => a - b)
  for (let i = 0; i < testArray1.length; i++) {
    if (testArray1[i] === testArray1[i + 1]){
      testArray1.splice(i, 1)
    }
    
  }
  return testArray1
  
}

// Result so far:
// expect(received).toEqual(expected) // deep equality

//     Expected: ArrayContaining [3, 7, 10, 5, 4, 8, 2, 1]
//     Received: [3, 3, 4, 5, 7, 10]