class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a value into the heap
    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    // Remove the minimum value from the heap
    remove() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return min;
    }

    // Heapify the element at index up
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // Heapify the element at index down
    heapifyDown(index) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let smallest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    // Get the minimum value from the heap
    getMin() {
        return this.heap[0];
    }
}

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();

    for (const num of nums) {
        if (minHeap.heap.length < k) {
            minHeap.insert(num);
        } else if (num > minHeap.getMin()) {
            minHeap.remove();
            minHeap.insert(num);
        }
    }

    return minHeap.getMin();
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));  // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));  // Output: 4
