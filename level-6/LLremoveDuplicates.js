// Remove duplicates from a LL
function removeDuplicates(llist) {
    // Edge case: list is empty
    if (llist === null) return null

    let curr = llist;

    while (curr !== null && curr.next) {
        if (curr.data === curr.next.data) {
            curr.next = curr.next.next
        }
        else {
            curr = curr.next;
        }
    }

    return llist

}