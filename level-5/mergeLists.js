// Merge two singly linked lists

function mergeTwoLinkedLists(l1, l2) {
    // create new linked list pointer
    let l3 = new ListNode(null, null)
    let prev = l3

    // while both linked lists are not empty
    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next
    }
    if (l1 === null) prev.next = l2
    if (l2 === null) prev.next = l1
    return l3.next

}