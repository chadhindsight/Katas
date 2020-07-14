// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    // This holds our data in order
    constructor() {
        this.data = []
    }
    
    // Put new data to the front of array
    add(item){
        this.data.unshift(item)
    }
    // Put new data at the back
    remove() {
        return this.data.pop()
    }
}

module.exports = Queue;
