// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    // node has two properties
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head){
        this.head = null
    }
    // Assign the resulting node to the head property and put that new node to the front of linked list
    insertFirst(data){
        this.head = new Node(data, this.head)
    }
    size() {
        //count frequency
        let counter = 0;
        let node = this.head
        
        while(node){
            counter++;
            // if node.next = null then there are no other nodes to check
            node = node.next
        }
        return counter
    }
    getFirst() {
       return this.head
    }

    getLast() {
        // Check the value of the head
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    clear() {
        return this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        // create a new node with data and insert it into the very end of our chain
        const last = this.getLast()
        if(last) {
            last.next = new Node(data);
        } else{
            // The chain is empty if this runs
            this.head = new Node(data)
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

   removeAt(i) {
    if(!this.head){return}
    // Removing the very first index
    if(i === 0) {
        this.head = this.head.next
        return 
    }
    // Find the node right before the one we're trying to remove
    const previous = this.getAt(i - 1)
    if(!previous) {
        return;
    }
    previous.next = previous.next.next
   } 
 
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }
    // Define a generator function with the key of ymbol.iterator]
    *[Symbol.iterator]() {
        let node = this.head

        while(node) {
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
