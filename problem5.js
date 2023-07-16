function meanMedian(arrayInput) {
    const sortedArray = arrayInput.slice().sort((a, b) => a - b);
  
    const mean = arrayInput.reduce((acc, num) => acc + num, 0) / arrayInput.length;
  
    let median;
    if (sortedArray.length % 2 === 0) {
      const middleIndex1 = sortedArray.length / 2 - 1;
      const middleIndex2 = sortedArray.length / 2;
      median = (sortedArray[middleIndex1] + sortedArray[middleIndex2]) / 2;
    } else {
      const middleIndex = Math.floor(sortedArray.length / 2);
      median = sortedArray[middleIndex];
    }
      return [mean, median];
  }
  
  console.log(meanMedian([1, 2, 3, 4]));          // [2.5, 2.5]
  console.log(meanMedian([1, 2, 3, 4, 5]));       // [3, 3]
  console.log(meanMedian([7, 8, 9, 13, 15]));     // [10.4, 9]
  console.log(meanMedian([10, 20, 30, 40, 50]));  // [30, 30]
  console.log(meanMedian([15, 20, 30, 60, 120])); // [49, 30]