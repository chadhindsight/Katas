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
    getLast(){
        let node = this.head
        //If head is null, linked list is empty
        if (!this.head ) return null

        while(node) {
            if(!node.next) {return node}
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
