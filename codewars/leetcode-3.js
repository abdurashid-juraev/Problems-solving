var deleteDuplicates = function (head) {
  let node = head;
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
let head = arrayToLinkedList([1, 2, 3, 3, 4, 4, 5]);
let result = deleteDuplicates(head);
console.log(linkedListToArray(result));
