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
        var newNode = new Node(val);
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
    length() {
        var counter = 0;
        var runner = this.head;
        while (runner) {
            counter++;
            runner = runner.next;
        }
        return counter;
    }
}

var singlyList = new SLL();
var node1 = new Node("Andy");
var node2 = new Node("Bob");
var node3 = new Node("Carl");
var node4 = new Node("Dave");
var node5 = new Node("Ed");
var node6 = new Node("Frank");
singlyList.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

singlyList.addFront("Zeke");

console.log(singlyList.length());