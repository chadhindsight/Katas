// Find the K - th last element of a singly linked list
function getKthLastElement(head, k) {
    if (!head || k < 0) {
        return null
    }
    // Use two pointers
    let current = head
    let kLast = head

    for (let i = 0; i < k; i++) {
        current = current.next
        if (!current) {
            return null
        }
    }
    while (current.next) {
        current = current.next
        kLast = kLast.next
    }
    return kLast
}