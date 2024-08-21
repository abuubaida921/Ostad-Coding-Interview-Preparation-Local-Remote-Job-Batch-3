// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

// Function to merge two sorted linked lists
function mergeTwoLists(list1, list2) {
  
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and merge them
  while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  // If there are remaining elements in either list, attach them
  if (list1 !== null) {
      current.next = list1;
  } else if (list2 !== null) {
      current.next = list2;
  }

  return dummy.next;
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

// Helper function to convert linked list to array (for easy verification)
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
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]

let list3 = createLinkedList([]);
let list4 = createLinkedList([]);
let mergedList2 = mergeTwoLists(list3, list4);
console.log(linkedListToArray(mergedList2)); // Output: []

let list5 = createLinkedList([]);
let list6 = createLinkedList([0]);
let mergedList3 = mergeTwoLists(list5, list6);
console.log(linkedListToArray(mergedList3)); // Output: [0]



/// Time Complexity: O(n+m), where n is the number of nodes in list1 and m is the number of nodes in list2.
/// Also Space Complexity: O(1)
