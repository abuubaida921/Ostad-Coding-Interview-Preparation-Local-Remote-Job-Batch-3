// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to reverse the singly linked list
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let arr = [];
    let current = head;

    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }

    return arr;
}

// Test cases
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let reversedHead1 = reverseLinkedList(head1);
console.log(linkedListToArray(reversedHead1));

let head2 = createLinkedList([1, 2]);
let reversedHead2 = reverseLinkedList(head2);
console.log(linkedListToArray(reversedHead2));

let head3 = createLinkedList([]);
let reversedHead3 = reverseLinkedList(head3);
console.log(linkedListToArray(reversedHead3));

/// Time Complexity: O(n)
/// Also Space Complexity: O(1)