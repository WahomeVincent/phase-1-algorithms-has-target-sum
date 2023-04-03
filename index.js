function hasTargetSum(array, target) {
  // Write your algorithm here
  //The sum of any two numbers in my array should be equal to the target.
  //example ([1,4,5,7], 8) should return true while ([1,4,5,7], 6) should return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

function hasTargetSum(array, target) {
  const complements = new Set();
  for (const num of array) {
    if (complements.has(num)) {
      return true;
    }
    complements.add(target - num);
  }
  return false;
}


