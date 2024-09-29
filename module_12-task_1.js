function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    
    let totalUnits = 0;
    
    for (let [numBoxes, unitsPerBox] of boxTypes) {
        if (truckSize <= 0) break;
        
        let boxesToTake = Math.min(numBoxes, truckSize);
        
        totalUnits += boxesToTake * unitsPerBox;
        
        truckSize -= boxesToTake;
    }
    
    return totalUnits;
}

/// Example usage:
const boxTypes = [[1, 3], [2, 2], [3, 1]];
const truckSize = 4;
console.log(maximumUnits(boxTypes, truckSize)); /// Output: 8



/// Time Complexity: O(n log n)
/// Also Space Complexity: O(1)