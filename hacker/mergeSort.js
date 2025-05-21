function mergeSort(arr) {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right, and add the smallest to result
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++; // move left pointer
      } else {
        result.push(right[rightIndex]);
        rightIndex++; // move right pointer
      }
    }
  
    // Concatenate any remaining elements from left and right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example
  const numbers = [9,7,8];
  console.log("Sorted Array:", mergeSort(numbers));