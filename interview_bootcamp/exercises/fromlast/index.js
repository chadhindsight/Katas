// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // Both variables start at the first node, then move fast up by a certain number of spaces
    let slow = list.getFirst()
    let fast = list.getFirst()
    
    while(n > 0) {
        fast = fast.next;
        n--
    }
    //Next step: move both variables up by 1 until fast hits the end node and then check diff between fast and slow
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}

module.exports = fromLast;
