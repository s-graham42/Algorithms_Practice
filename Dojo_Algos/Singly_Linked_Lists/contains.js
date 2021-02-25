// -- Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// --Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

 // --Front
 // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront() {
        if (this.head == null) {
            return null
        }
        else {
            this.head = this.head.next
            return this.head
        }
    }
    front() {
        if (this.head == null) {
            return null
        }
        return this.head.value
    }
    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.val == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

